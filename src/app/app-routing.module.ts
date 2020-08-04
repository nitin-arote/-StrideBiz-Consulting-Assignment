import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component'
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { InvalidPageComponent } from "./invalid-page/invalid-page.component";
import { UsersComponent  } from "./users/users.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  { path: "login", component : LoginComponent},
  { path: "dashboard", component : DashboardComponent},
  { path: "pie-chart", component : PieChartComponent},
  { path: "users", component : UsersComponent},
  { path: "**", component : InvalidPageComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
