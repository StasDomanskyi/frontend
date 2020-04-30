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
import { PostSupportDataComponent } from './components/support-data/post-support-data/post-support-data.component';
import { PostAdditionalDataComponent } from './components/additional-data/post-additional-data/post-additional-data.component';
import { PostEmployeeDataComponent } from './components/employee-data/post-employee-data/post-employee-data.component';
import { PostServerDataComponent } from './components/server-data/post-server-data/post-server-data.component';
import { PostDomainListComponent } from './components/domain-list/post-domain-list/post-domain-list.component';
import { GetEmployeeDataComponent } from './components/employee-data/get-employee-data/get-employee-data.component';
import { GetDomainListComponent } from './components/domain-list/get-domain-list/get-domain-list.component';
import { PutAccountDataComponent } from './components/account-data/put-account-data/put-account-data.component';
import { PutHostingServiceDataComponent } from './components/hosting-service-data/put-hosting-service-data/put-hosting-service-data.component';
import { PutSupportDataComponent } from './components/support-data/put-support-data/put-support-data.component';
import { PutAdditionalDataComponent } from './components/additional-data/put-additional-data/put-additional-data.component';
import { PutEmployeeDataComponent } from './components/employee-data/put-employee-data/put-employee-data.component';
import { PutServerDataComponent } from './components/server-data/put-server-data/put-server-data.component';
import { PutDomainListComponent } from './components/domain-list/put-domain-list/put-domain-list.component';
import { DeleteAccountDataComponent } from './components/account-data/delete-account-data/delete-account-data.component';
import { DeleteHostingServiceDataComponent } from './components/hosting-service-data/delete-hosting-service-data/delete-hosting-service-data.component';
import { DeleteSupportDataComponent } from './components/support-data/delete-support-data/delete-support-data.component';
import { DeleteAdditionalDataComponent } from './components/additional-data/delete-additional-data/delete-additional-data.component';
import { DeleteEmployeeDataComponent } from './components/employee-data/delete-employee-data/delete-employee-data.component';
import { DeleteServerDataComponent } from './components/server-data/delete-server-data/delete-server-data.component';
import { DeleteDomainListComponent } from './components/domain-list/delete-domain-list/delete-domain-list.component';
import { GetServerDataComponent } from './components/server-data/get-server-data/get-server-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // R1 - Table
    ClientsListComponent,
    GetClientsListComponent,
    PostClientsListComponent,
    PutClientsListComponent,
    DeleteClientsListComponent,
    // R2 - Table
    AccountDataComponent,
    GetAccountDataComponent,
    PostAccountDataComponent,
    PutAccountDataComponent,
    DeleteAccountDataComponent,
    // R3 - Table
    HostingServiceDataComponent,
    GetHostingServiceDataComponent,
    PostHostingServiceDataComponent,
    PutHostingServiceDataComponent,
    DeleteHostingServiceDataComponent,
    // R4 - Table
    SupportDataComponent,
    GetSupportDataComponent,
    PostSupportDataComponent,
    PutSupportDataComponent,
    DeleteSupportDataComponent,
    // R5 - Table
    AdditionalDataComponent,
    GetAdditionalDataComponent,
    PostAdditionalDataComponent,
    PutAdditionalDataComponent,
    DeleteAdditionalDataComponent,
    // R6 - Table
    EmployeeDataComponent,
    GetEmployeeDataComponent,
    PostEmployeeDataComponent,
    PutEmployeeDataComponent,
    DeleteEmployeeDataComponent,
    // R7 - Table
    ServerDataComponent,
    GetServerDataComponent,
    PostServerDataComponent,
    PutServerDataComponent,
    DeleteServerDataComponent,
    // R8 - Table
    DomainListComponent,
    GetDomainListComponent,
    PostDomainListComponent,
    PutDomainListComponent,
    DeleteDomainListComponent,
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
