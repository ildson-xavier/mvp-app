import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { ProductDetailComponent } from './modules/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './modules/product/product-create/product-create.component';
import { ProductUpdateComponent } from './modules/product/product-update/product-update.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ParameterComponent } from './modules/parameters/parameter.component';
import { MonitoringPanelComponent } from './modules/monitoring-panel/monitoring-panel.component';
import { MonitoringDetailComponent } from './modules/monitoring-panel/monitoring-detail/monitoring-detail.component';
import { MonitoringRmcDetailComponent } from './modules/monitoring-rmc-panel/monitoring-rmc-detail/monitoring-rmc-detail.component';
import { MonitoringRmcPanelComponent } from './modules/monitoring-rmc-panel/monitoring-rmc-panel.component';
import { DashboardDetailComponent } from './modules/dashboard-detail/dashboard-detail.component';
import { DetailComponent } from './modules/posts/detail/detail.component';


const routes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'pse',  component: DefaultComponent,  children: [ 
      //{path: 'products', component: ProductListComponent},
      //{path: 'parameters', component: ParameterComponent,   },  
      //{path: 'monitoring', component: MonitoringPanelComponent },
      //{path: 'monitoring/detail/:id/:idFileControl/:contract', component: MonitoringDetailComponent },
      //{path: 'monitoring-rmc', component: MonitoringRmcPanelComponent },
      //{path: 'monitoring-rmc/detail/:id/:idFileControl/:contract', component: MonitoringRmcDetailComponent} ,
      /* {path: 'product/detail/:id', component: ProductDetailComponent},
      {path: 'product',  component: ProductCreateComponent},
      {path: 'product/update/:id',  component: ProductUpdateComponent}, */
      {path: 'dashboard',  component: DashboardComponent},
      {path: 'dashboard/jobs',  component: DashboardDetailComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'posts/detail', component: DetailComponent} 
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
