import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
mydata:any = null
istrue:boolean  = false
newsnumber:number = 0
  constructor(private router:Router,private services:NewsService) { }

  ngOnInit(): void {
    this.istrue = true
    console.log(this.istrue)
    this.services.geteverything(this.newsnumber).subscribe(res=>{
      // console.log(this.istrue)
      this.istrue = false
      console.log(res);
      this.newdata = res
      console.log(this.istrue)
    })
  }
  gosomewhere(){
    this.newsnumber = this.newsnumber+21;
    this.services.geteverything(this.newsnumber).subscribe(res=>{
      // console.log(this.istrue)
      this.istrue = false
      console.log(res);
      this.mydata = res
      console.log(this.istrue)
    })

  }

  herehe(e:any){
    // console.log('hocche');
    // this.services.gettingcategory('health',this.newsnumber).subscribe(res=>{
    //   this.mydata = res
    // })

    if(e.target.checked){
      this.services.gettingcategory('health').subscribe(res=>{
        this.mydata = res
      })
    }

  }
  herebus(e:any){
    // console.log('hocche');
    // this.services.gettingcategory('business',this.newsnumber).subscribe(res=>{
    //   this.mydata = res
    // })

    if(e.target.checked){
      this.services.gettingcategory('business').subscribe(res=>{
        this.mydata = res
      })
    }

  }
  hereen(e:any){
    // console.log('hocche');
    // this.services.gettingcategory('entertainment',this.newsnumber).subscribe(res=>{
    //   this.mydata = res
    // })

    if(e.target.checked){
      this.services.gettingcategory('entertainment').subscribe(res=>{
        this.mydata = res
      })
    }

  }
  heresc(e:any){
    // console.log('hocche');
    // this.services.gettingcategory('science',this.newsnumber).subscribe(res=>{
    //   this.mydata = res
    // })

    if(e.target.checked){
      this.services.gettingcategory('science').subscribe(res=>{
        this.mydata = res
      })
    }

  }
  heresp(e:any){
    // console.log('hocche');
    // this.services.gettingcategory('sports',this.newsnumber).subscribe(res=>{
    //   this.mydata = res
    // })

    if(e.target.checked){
      this.services.gettingcategory('sports').subscribe(res=>{
        this.mydata = res
      })
    }
 
  }
  heretech(e:any){
    // console.log('hocche');
    // this.services.gettingcategory('technology',this.newsnumber).subscribe(res=>{
    //   this.mydata = res
    // })

    if(e.target.checked){
      this.services.gettingcategory('technology').subscribe(res=>{
        this.mydata = res
      })
    }

  }
  heregen(e:any){
    // var cb = document.getElementById('flexSwitchCheckDefaultge')
    // console.log(e);
    if(e.target.checked){
      this.services.gettingcategory('general').subscribe(res=>{
        this.mydata = res
      })
    }
  
 
  }
data:any = null
  newdata:any = null
search(){
  console.log(this.data)
  this.services.newsapi(this.data).subscribe(res=>{
    console.log(res)
    this.newdata = res
    this.mydata = null
  })
}

}
