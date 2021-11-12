import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
