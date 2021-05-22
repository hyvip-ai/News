// import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


//my api key is 7

// 721c2bf45d5f47018abab5a4dd5c433f

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  mydate:any = new Date(); 
  constructor(private http:HttpClient) {
    // this.mydate = this.datepipe.transform(this.mydate,'yyyy-MM-dd')
    console.log(this.mydate)
   }


  //get everything on specific topic 
  geteverything(num:number){
 

    return this.http.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=721c2bf45d5f47018abab5a4dd5c433f`)
  }

  gettingcategory(data:any){
    return this.http.get(`http://api.mediastack.com/v1/news?access_key=0defb8379eb87f2af7ae7d9bb60c973a&categories=${data}&languages=en&sort=published_desc&offset=0&limit=21`)
  }


  newsapi(keyword:any){
    return this.http.get(`https://newsapi.org/v2/everything?q=${keyword}&from=2021-04-22&sortBy=publishedAt&apiKey=721c2bf45d5f47018abab5a4dd5c433f`)
  }

}
