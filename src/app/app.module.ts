import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { LiveComponent } from './live/live.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SavedComponent } from './saved/saved.component';
import { ProcessesComponent } from './processes/processes.component';
import { ComputersComponent } from './computers/computers.component';
import { LogInComponent } from './log_in/log_in.component';
import { WithNavbarComponent } from './with-navbar/with-navbar.component';

const appRoute : Routes = [
  {path : 'Log', component : LogInComponent},
  {path : 'Register', component : RegisterComponent},
  {path : 'LogOut', component : LogoutComponent},
  {path : '', component : WithNavbarComponent, children:[
    {path : '', component : HomeComponent,},
    {path : 'Home', component : HomeComponent},
    {path : 'Saved', component : SavedComponent},
    {path : 'Live', component : LiveComponent},
    {path : 'Processes', component : ProcessesComponent},
    {path : 'Computers', component : ComputersComponent}
  ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SavedComponent,
    LiveComponent,
    ProcessesComponent,
    ComputersComponent,
    LogInComponent,
    RegisterComponent,
    LogoutComponent,
    WithNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
