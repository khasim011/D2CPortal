import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnvironmentServicesComponent } from './environment-services/environment-services.component';
import { DataServicesComponent } from './data-services/data-services.component';
import { ToolServicesComponent } from './tool-services/tool-services.component';
import { TicketStatusComponent } from './ticket-status/ticket-status.component';
import { RedSimulatorStatusComponent } from './red-simulator-status/red-simulator-status.component';
import { PerformanceEngineeringComponent } from './performance-engineering/performance-engineering.component';
import { EngageeDeptComponent } from './engagee-dept/engagee-dept.component';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
  	{ path: 'home', component: HomeComponent, data: { animation: 'home' } },
  	{ path: 'environmentservices', component: EnvironmentServicesComponent, data: { animation: 'environmentservices' } },
  	{ path: 'dataservices', component: DataServicesComponent },
  	{ path: 'toolservices', component: ToolServicesComponent },
  	{ path: 'ticketstatus', component: TicketStatusComponent },
  	{ path: 'redsimulatorstatus', component: RedSimulatorStatusComponent },
  	{ path: 'performanceengineering', component: PerformanceEngineeringComponent },
  	{ path: 'Engage_eDept', component: EngageeDeptComponent },
  	{ path: 'additionalservices', component: AdditionalServicesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
