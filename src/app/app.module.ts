import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsListComponent } from './components/clients-list/clients-list-component/clients-list.component';
import { DomainListComponent } from './components/domain-list/domain-list.component';
import { ServerDataComponent } from './components/server-data/server-data.component';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { HostingServiceDataComponent } from './components/hosting-service-data/hosting-service-data.component';
import { AccountDataComponent } from './components/account-data/account-data.component';
import { SupportDataComponent } from './components/support-data/support-data.component';
import { AdditionalDataComponent } from './components/additional-data/additional-data.component';
import { GetClientsListComponent } from './components/clients-list/get-clients-list/get-clients-list.component';
import { PutClientsListComponent } from './components/clients-list/put-clients-list/put-clients-list.component';
import { DeleteClientsListComponent } from './components/clients-list/delete-clients-list/delete-clients-list.component';
import { PostClientsListComponent } from './components/clients-list/post-clients-list/post-clients-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsListComponent,
    DomainListComponent,
    ServerDataComponent,
    EmployeeDataComponent,
    HostingServiceDataComponent,
    AccountDataComponent,
    SupportDataComponent,
    AdditionalDataComponent,
    GetClientsListComponent,
    PutClientsListComponent,
    DeleteClientsListComponent,
    PostClientsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
