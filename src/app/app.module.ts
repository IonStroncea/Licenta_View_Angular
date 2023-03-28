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
import { GraphComponent } from './graph/graph.component';
import { GraphWithMenuComponent } from './graph-with-menu/graph-with-menu.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentValueComponent } from './current-value/current-value.component';
import { GraphAdderComponent } from './graph-adder/graph-adder.component';
import { MenuWithDateComponent } from './menu-with-date/menu-with-date.component';
import { ComputerInfoComponent } from './computer-info/computer-info.component';
import { GetMyComputersServiceService } from './get-my-computers-service.service';
import { ProcessesServiceService } from './processes-service.service';

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
    WithNavbarComponent,
    GraphComponent,
    GraphWithMenuComponent,
    MenuComponent,
    CurrentValueComponent,
    GraphAdderComponent,
    MenuWithDateComponent,
    ComputerInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute) 
  ],
  providers: [GetMyComputersServiceService, ProcessesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
