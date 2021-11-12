import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit() {
    this.JsFonction();
  }


 //mes fonctions
   JsFonction(){
    $(document).ready(function(){
      $('#formulaire').hide();
      $('#Afficher').on('click',function(){
     $('#formulaire').slideDown();
      });
      $('#cacher').on('click',function(){
     $('#formulaire').slideUp();
      });
    });
   }

   redirectTo(){
    this.Router.navigate(['/dashboard']);
  }
}
