// import { MY_GROUPS } from './modules/groups';
import { NgModule } from '@angular/core';
import { ErrorPageComponent, AuthGuard } from '@sunbird/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'learn', loadChildren: 'app/modules/learn/learn.module#LearnModule'
  },
  {
    path: 'dashBoard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
  },

  {
    path: 'profile', loadChildren: 'app/plugins/profile/profile.module#ProfileModule'
  },
  {
    path: 'certs', loadChildren: 'app/modules/certificate/certificate.module#CertificateModule'
  },



  {
    path: '', loadChildren: 'app/modules/public/public.module#PublicModule'
  },


  {
    path: 'error', component: ErrorPageComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
