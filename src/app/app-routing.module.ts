import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { SidenavComponent } from './Tutorial/Angular/SideNav/sidenav.component';
import { GitCommandsComponent } from './Tutorial/Git/Git-Commands/git-commands.component';
import { GitDeployComponent } from './Tutorial/Git/Git-Deploy/git-deploy.component';
import { SetupLocalComponent } from './Tutorial/Angular/Setup-Local/setup-local.component';
import { StartComponent } from './Tutorial/Angular/Start/start.component';
import { ContactUsComponent } from './Contact-Us/contact-us.component';
import { GitNavComponent } from './Tutorial/Git/Git-Nav/git-nav.component';

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
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
