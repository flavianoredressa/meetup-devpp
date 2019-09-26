import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listNews = [];
  constructor(private _http: HttpClient, private socialSharing: SocialSharing) {

  }

  ionViewWillEnter(){
   this.getNews();
  }
  getNews(){
    return new Promise(_=> {
      this._http.get("https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=59f57a2b05034632aa4038428afe2b26").toPromise()
        .then((res: any) => {
          this.listNews = res.articles
        }).catch(() => {
        })
    })
  }
  share(item){
    this.socialSharing.share('Ola isso!', null, null, item.url)
  }

  doInfinite(infiniteScroll) {

      infiniteScroll.complete();

  }
}
