import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedComponent } from './components/dashboard/feed/feed.component';

const routes: Routes = [
{
  path:'',redirectTo:'Home/news',pathMatch:'full'
},
  {

    path:'Home',component:DashboardComponent,children:[
      {
        path:'news',component:FeedComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
