import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsListComponent } from './components/clients-list/clients-list-component/clients-list.component';
import { DomainListComponent } from './components/domain-list/domain-list-component/domain-list.component';
import { ServerDataComponent } from './components/server-data/server-data-component/server-data.component';
import { EmployeeDataComponent } from './components/employee-data/employee-data-component/employee-data.component';
import { HostingServiceDataComponent } from './components/hosting-service-data/hosting-service-data-component/hosting-service-data.component';
import { AccountDataComponent } from './components/account-data/account-data-component/account-data.component';
import { SupportDataComponent } from './components/support-data/support-data-component/support-data.component';
import { AdditionalDataComponent } from './components/additional-data/additional-data-component/additional-data.component';
import { GetClientsListComponent } from './components/clients-list/get-clients-list/get-clients-list.component';
import { PutClientsListComponent } from './components/clients-list/put-clients-list/put-clients-list.component';
import { DeleteClientsListComponent } from './components/clients-list/delete-clients-list/delete-clients-list.component';
import { PostClientsListComponent } from './components/clients-list/post-clients-list/post-clients-list.component';
import { GetAccountDataComponent } from './components/account-data/get-account-data/get-account-data.component';
import { GetHostingServiceDataComponent } from './components/hosting-service-data/get-hosting-service-data/get-hosting-service-data.component';
import { GetSupportDataComponent } from './components/support-data/get-support-data/get-support-data.component';
import { GetAdditionalDataComponent } from './components/additional-data/get-additional-data/get-additional-data.component';
import { PostAccountDataComponent } from './components/account-data/post-account-data/post-account-data.component';
import { PostHostingServiceDataComponent } from './components/hosting-service-data/post-hosting-service-data/post-hosting-service-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsListComponent,
    GetClientsListComponent,
    PostClientsListComponent,
    PutClientsListComponent,
    DeleteClientsListComponent,
    AccountDataComponent,
    GetAccountDataComponent,
    PostAccountDataComponent,
    /* PutAccountDataComponent, */
    /* DeleteAccountDataComponent, */
    HostingServiceDataComponent,
    GetHostingServiceDataComponent,
    PostHostingServiceDataComponent,
    /* PutHostingServiceDataComponent, */
    /* DeleteHostingServiceDataComponent, */
    SupportDataComponent,
    GetSupportDataComponent,
    /* PostSupportDataComponent, */
    /* PutSupportDataComponent, */
    /* DeleteSupportDataComponent, */
    AdditionalDataComponent,
    GetAdditionalDataComponent,
    /* PostAdditionalDataComponent, */
    /* PutAdditionalDataComponent, */
    /* DeleteAdditionalDataComponent, */
    EmployeeDataComponent,
    /* GetEmployeeDataComponent, */
    /* PostEmployeeDataComponent, */
    /* PutEmployeeDataComponent, */
    /* DeleteEmployeeDataComponent, */
    ServerDataComponent,
    /* GetServerDataComponent, */
    /* PostServerDataComponent, */
    /* PutServerDataComponent, */
    /* DeleteServerDataComponent, */
    DomainListComponent,
    /* GetDomainListComponent, */
    /* PostDomainListComponent, */
    /* PutDomainListComponent, */
    /* DeleteDomainListComponent, */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
