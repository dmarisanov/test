import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DynamicDialogComponent, DynamicDialogModule} from 'primeng/dynamicdialog';
import { DialogService, DynamicDialogRef } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

import { AppComponent } from './components/layout/app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { TableComponent } from './components/table/table.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

import { AppRoutingModule } from './modules/router/router.module';
import { DashboardModule } from './components/dashboard.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptor/auth.interceptor';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InfoComponent,
    TableComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    DialogModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
  ],
  providers: [
    DialogService,
    DynamicDialogRef,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AuthenticationComponent,
    DynamicDialogComponent,
  ]
})
export class AppModule {
}
