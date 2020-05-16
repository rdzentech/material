import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './tutorial/angular/main-sidenav/sidenav.component';
import { GitCommandsComponent } from './tutorial/git/git-commands/git-commands.component';
import { GitDeployComponent } from './tutorial/git/git-deploy/git-deploy.component';
import { SetupLocalComponent } from './tutorial/angular/setup-local/setup-local.component';
import { StartComponent } from './tutorial/angular/start/start.component';

const routes: Routes = [
  {
    path: 'angular', component: SidenavComponent,
    children: [
      //Git Series
      { path: 'git-commands', component: GitCommandsComponent },

      { path: 'git-deploy', component: GitDeployComponent },

      // Angular Series
      { path: 'setup-local', component: SetupLocalComponent },
      { path: 'your-first-app', component: StartComponent }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
