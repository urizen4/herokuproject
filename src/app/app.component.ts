import { Component,OnInit } from '@angular/core';
//declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'azharProject';


ngOnInit(){
  this.MyJsFonction();
}


MyJsFonction(){
  $('.sidenav').sidenav();
  //pour le slider
  /*$('.slider').slider({
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000
    });*/
    // initialisation le select et les options
    $('select').formSelect();
    $('.date').datepicker();
    $('.tooltipped').tooltip();
}


}
