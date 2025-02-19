import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotsBaseLayoutConfig } from 'projects/tots/layout/src/lib/entities/tots-base-layout-config';
import { ModernLayoutComponent } from 'projects/tots/layout/src/public-api';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ModernLayoutComponent,
    data: {
      footer: 'Tots &copy; 2023'
    } as TotsBaseLayoutConfig,
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
