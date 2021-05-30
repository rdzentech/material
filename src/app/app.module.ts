import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';


import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { SidenavComponent } from './Tutorial/Angular/SideNav/sidenav.component';

import { SetupLocalComponent } from './Tutorial/Angular/Setup-Local/setup-local.component';
import { StartComponent } from './Tutorial/Angular/Start/start.component';
import { GitCommandsComponent } from './Tutorial/Git/Git-Commands/git-commands.component';
import { GitDeployComponent } from './Tutorial/Git/Git-Deploy/git-deploy.component';
import { ContactUsComponent } from './Contact-Us/contact-us.component';
import { GitNavComponent } from './Tutorial/Git/Git-Nav/git-nav.component';




@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    HomeComponent,
    SidenavComponent, 
    SetupLocalComponent,
    StartComponent,
    GitCommandsComponent,
    GitDeployComponent,
    ContactUsComponent,
    GitNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
