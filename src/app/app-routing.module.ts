import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {path:'' ,redirectTo:'connexion',pathMatch:'full'},
  {path:'connexion',component:ConnexionComponent},
  {path:'dashBoard' ,component:DashboardComponent},
                                             ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
