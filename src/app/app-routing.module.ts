import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {ResumeComponent} from './resume/resume.component';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';
import {HomeComponent} from './home/home.component';
import { from } from 'rxjs';



const routes: Routes = [
  {path: 'resume', component:ResumeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'blog', component:BlogComponent},
  {path: '', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
