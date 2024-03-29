import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { SignupComponent } from './Auth/signup/signup.component';
import { ApiService } from './Services/api.service';
import { LoginComponent } from './Auth/login/login.component';
import { LogoutComponent } from './Auth/logout/logout.component';
import { NaviComponent } from './shared/navi/navi.component';
import { HomeComponent } from './home/home.component';
import { ProfessorComponent } from './professor/professor.component';
import { MovelistComponent } from './movelist/movelist.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    NaviComponent,
    HomeComponent,
    ProfessorComponent,
    MovelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
