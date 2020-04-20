import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { DomainListComponent } from './components/domain-list/domain-list.component';
import { ServerDataComponent } from './components/server-data/server-data.component';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { HostingServiceDataComponent } from './components/hosting-service-data/hosting-service-data.component';
import { AccountDataComponent } from './components/account-data/account-data.component';
import { SupportDataComponent } from './components/support-data/support-data.component';
import { AdditionalDataComponent } from './components/additional-data/additional-data.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'client-list', component: ClientsListComponent},
  {path: 'server-data', component: ServerDataComponent},
  {path: 'employee-data', component: EmployeeDataComponent},
  {path: 'hosting-service-data', component: HostingServiceDataComponent},
  {path: 'account-data', component: AccountDataComponent},
  {path: 'support-data', component: SupportDataComponent},
  {path: 'domain-list', component: DomainListComponent},
  {path: 'additional-data', component: AdditionalDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
