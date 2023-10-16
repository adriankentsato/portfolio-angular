import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/components/not-found/not-found.component';
import { LayoutComponent } from 'src/components/layout/layout.component';
import { AuthGuard } from 'src/route-guards/AuthGuard';
import { LandingPage } from 'src/route-guards/LandingPage';
import { LoginCheck } from 'src/route-guards/LoginCheck';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        children: [],
        canActivate: [ AuthGuard, LandingPage ],
      },
      {
        path: 'dashboard',
        loadChildren: () => import('src/components/dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [ AuthGuard ],
      },
    ],
  },
  {
    path: 'login',
    canActivate: [ LoginCheck ],
    loadChildren: () => import('src/components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
