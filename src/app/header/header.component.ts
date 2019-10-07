import { Component, OnInit } from '@angular/core';
//import { runInThisContext } from 'vm';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Hello World!';
  constructor() { }

  ngOnInit() {
  }
  //update title based on router link 
  updateTitle(path : string){
    if(path =="Home") this.title = "Hello World!";
    else if(path == "About") this.title = "About";
    else if(path == "Resume") this.title = "Résumé";
    else if(path == "Blog") this.title = "Blog";
  }
}
