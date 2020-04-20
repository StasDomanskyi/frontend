import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { DomainListComponent } from './components/domain-list/domain-list.component';
import { ServerDataComponent } from './components/server-data/server-data.component';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { HostingServiceDataComponent } from './components/hosting-service-data/hosting-service-data.component';
import { AccountDataComponent } from './components/account-data/account-data.component';
import { SupportDataComponent } from './components/support-data/support-data.component';
import { AdditionalDataComponent } from './components/additional-data/additional-data.component';

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
    AdditionalDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
