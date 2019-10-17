import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url1 = "https://24e90ad7.ngrok.io/api/KB/";


  url = this.url1+"GetArticles?getall=0&categ=";
  add_article: string =this.url1 +"InsertUpdateKBAricles";
  URLfetchDataById =this.url1 + 'GetKBArticlesById?ArticleId=';
  getArticles = this.url1 +"GetCategories";
  URLInsertUpdate =this.url1 + 'InsertUpdateKBAricles';
  readmore =this.url1 + "GetReadArticle?ArticleId=";
  pagination= this.url1 +"GetArticles?getall=0&categ=&";
  search = this.url1 +"GetArticles?getall=0&SearchString=";
  concat: string;
  constructor(private _http: HttpClient) { }

  gatAllData(){
    return this._http.get(this.url);
  }

  getPageByNumber(num) {
    this.concat = "categ=" + "&Page=" + num;
    return this._http.get(this.pagination + this.concat);
  }
  addArti(item){
    console.log(item);
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('content-type','Application/json');
    return this._http.post(this.URLInsertUpdate,body,{headers:head});
  }
  editArti(item){
    console.log(item);
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('content-type','Application/json');
    return this._http.post(this.URLInsertUpdate,body,{headers:head});
  }
  getReadArticles(i){
    console.log(i);
    return this._http.get(this.readmore+i);

  }
}
