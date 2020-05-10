import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';
import { HeaderComponent } from './navigation/main-header/header.component';
import { SidenavListComponent } from './navigation/main-sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';


import { SidenavComponent } from './tutorial/main-sidenav/sidenav.component';
import { NavComponent } from './tutorial/page-nav/nav.component';
import { PageHeaderComponent } from './tutorial/page-header/page-header.component';
import { ViewerComponent } from './tutorial/viewer/viewer.component';
import { StartComponent } from './tutorial/angular/start/start.component';
import { SetupLocalComponent } from './tutorial/angular/setup-local/setup-local.component';
import { GitCommandsComponent } from './tutorial/git/git-commands/git-commands.component';
import { GitDeployComponent } from './tutorial/git/git-deploy/git-deploy.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,   
    SidenavListComponent,
    HomeComponent,
    SidenavComponent,
    NavComponent,
    PageHeaderComponent,
    ViewerComponent,
    SetupLocalComponent,
    StartComponent,
    GitCommandsComponent,
    GitDeployComponent
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
