import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { PostClientsListComponent } from './components/clients-list/post-clients-list/post-clients-list.component';
import { PutClientsListComponent } from './components/clients-list/put-clients-list/put-clients-list.component';
import { DeleteClientsListComponent } from './components/clients-list/delete-clients-list/delete-clients-list.component';
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
  {path: 'account-data/post-form', component: PostAccountDataComponent},
  {path: 'account-data/put-form', component: PutAccountDataComponent},
  {path: 'account-data/delete-form', component: DeleteAccountDataComponent},
  // HOSTING SERVICE
  {path: 'hosting-service-data', component: HostingServiceDataComponent},
  {path: 'hosting-service-data/get-form', component: GetHostingServiceDataComponent},
  {path: 'hosting-service-data/post-form', component: PostHostingServiceDataComponent},
  {path: 'hosting-service-data/put-form', component: PutHostingServiceDataComponent},
  {path: 'hosting-service-data/delete-form', component: DeleteHostingServiceDataComponent},
  // SUPPORT DATA
  {path: 'support-data', component: SupportDataComponent},
  {path: 'support-data/get-form', component: GetSupportDataComponent},
  {path: 'support-data/post-form', component: PostSupportDataComponent},
  {path: 'support-data/put-form', component: PutSupportDataComponent},
  {path: 'support-data/delete-form', component: DeleteSupportDataComponent},
  // ADDITIONAL DATA
  {path: 'additional-data', component: AdditionalDataComponent},
  {path: 'additional-data/get-form', component: GetAdditionalDataComponent},
  {path: 'additional-data/post-form', component: PostAdditionalDataComponent},
  {path: 'additional-data/put-form', component: PutAdditionalDataComponent},
  {path: 'additional-data/delete-form', component: DeleteAdditionalDataComponent},
  // EMPLOYEE DATA
  {path: 'employee-data', component: EmployeeDataComponent},
  {path: 'employee-data/get-form', component: GetEmployeeDataComponent},
  {path: 'employee-data/post-form', component: PostEmployeeDataComponent},
  {path: 'employee-data/put-form', component: PutEmployeeDataComponent},
  {path: 'employee-data/delete-form', component: DeleteEmployeeDataComponent},
  // SERVER DATA  
  {path: 'server-data', component: ServerDataComponent},
  {path: 'server-data/get-form', component: GetServerDataComponent},
  {path: 'server-data/post-form', component: PostServerDataComponent},
  {path: 'server-data/put-form', component: PutServerDataComponent},
  {path: 'server-data/delete-form', component: DeleteServerDataComponent},
  // DOMAIN LIST
  {path: 'domain-list', component: DomainListComponent},
  {path: 'domain-list/get-form', component: GetDomainListComponent},
  {path: 'domain-list/post-form', component: PostDomainListComponent},
  {path: 'domain-list/put-form', component: PutDomainListComponent},
  {path: 'domain-list/delete-form', component: DeleteDomainListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
