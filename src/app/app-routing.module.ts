import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './tutorial/angular/main-sidenav/sidenav.component';
import { GitCommandsComponent } from './tutorial/git/git-commands/git-commands.component';
import { GitDeployComponent } from './tutorial/git/git-deploy/git-deploy.component';
import { SetupLocalComponent } from './tutorial/angular/setup-local/setup-local.component';
import { StartComponent } from './tutorial/angular/start/start.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GitNavComponent } from './tutorial/git/git-nav/git-nav.component';

const routes: Routes = [
  {
    path: 'angular', component: SidenavComponent,    
    children: [
      // Angular Series
      { path: 'setup-local', component: SetupLocalComponent },
      { path: 'your-first-app', component: StartComponent }
    ]
  },  
  {
    path: 'git', component: GitNavComponent,
    children: [
    //Git Series
    { path: 'git-commands', component: GitCommandsComponent },

    { path: 'git-deploy', component: GitDeployComponent },

  ]
},

  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },  
  //{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
