import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.MyjsFunctions();
  }

  MyjsFunctions()
  {
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
