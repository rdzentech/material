import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';


import { HeaderComponent } from './navigation/main-header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './tutorial/angular/main-sidenav/sidenav.component';

import { SetupLocalComponent } from './tutorial/angular/setup-local/setup-local.component';
import { StartComponent } from './tutorial/angular/start/start.component';
import { GitCommandsComponent } from './tutorial/git/git-commands/git-commands.component';
import { GitDeployComponent } from './tutorial/git/git-deploy/git-deploy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GitNavComponent } from './tutorial/git/git-nav/git-nav.component';




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
