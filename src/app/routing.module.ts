import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './Auth/signup/signup.component';
import { LogoutComponent } from './Auth/logout/logout.component';
import { LoginComponent } from './Auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { MovelistComponent } from './movelist/movelist.component';
import { ProfessorComponent } from './professor/professor.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'professor', component: ProfessorComponent},
  { path: 'movelist', component: MovelistComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {}
