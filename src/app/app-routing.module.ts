import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientsListComponent } from './components/clients-list/clients-list-component/clients-list.component';
import { DomainListComponent } from './components/domain-list/domain-list.component';
import { ServerDataComponent } from './components/server-data/server-data.component';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { HostingServiceDataComponent } from './components/hosting-service-data/hosting-service-data-component/hosting-service-data.component';
import { AccountDataComponent } from './components/account-data/account-data-component/account-data.component';
import { SupportDataComponent } from './components/support-data/support-data-component/support-data.component';
import { AdditionalDataComponent } from './components/additional-data/additional-data.component';
import { GetClientsListComponent } from './components/clients-list/get-clients-list/get-clients-list.component';
import { PostClientsListComponent } from './components/clients-list/post-clients-list/post-clients-list.component';
import { PutClientsListComponent } from './components/clients-list/put-clients-list/put-clients-list.component';
import { DeleteClientsListComponent } from './components/clients-list/delete-clients-list/delete-clients-list.component';
import { GetAccountDataComponent } from './components/account-data/get-account-data/get-account-data.component';
import { GetHostingServiceDataComponent } from './components/hosting-service-data/get-hosting-service-data/get-hosting-service-data.component';
import { GetSupportDataComponent } from './components/support-data/get-support-data/get-support-data.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  // CLIENT LIST
  {path: 'client-list', component: ClientsListComponent},
  {path: 'client-list/get-form', component: GetClientsListComponent},
  {path: 'client-list/post-form', component: PostClientsListComponent},
  {path: 'client-list/put-form', component: PutClientsListComponent},
  {path: 'client-list/delete-form', component: DeleteClientsListComponent},
  // ACCOUNT DATA
  {path: 'account-data', component: AccountDataComponent},
  {path: 'account-data/get-form', component: GetAccountDataComponent},
  // HOSTING SERVICE
  {path: 'hosting-service-data', component: HostingServiceDataComponent},
  {path: 'hosting-service-data/get-form', component: GetHostingServiceDataComponent},
  //SUPPORT DATA
  {path: 'support-data', component: SupportDataComponent},
  {path: 'support-data/get-form', component: GetSupportDataComponent},

  {path: 'server-data', component: ServerDataComponent},
  {path: 'employee-data', component: EmployeeDataComponent},
  
  {path: 'domain-list', component: DomainListComponent},
  {path: 'additional-data', component: AdditionalDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
