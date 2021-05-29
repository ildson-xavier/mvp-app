import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { AuthInterceptor } from './services/auth/auth.interceptor';
import { ParameterService } from './services/parameters/parameter.service';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LoguserService } from './services/loguser/loguser.service';
import { MonitoringService } from './services/monitoring/monitoring.service';
import { ErrorComponent } from './modules/error/error.component';
registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,

    RouterModule.forRoot([
      { path: '', redirectTo: '/pse', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'posts', component: PostsComponent },
    ])
  ],

  providers: [
    AuthGuard,
    ParameterService,
    LoguserService,
    AuthService,
    MonitoringService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
