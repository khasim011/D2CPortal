import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Import the Http Module and our http Service
import { HttpModule } from '@angular/http';
import { HttpService } from './services/httprequest.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { EnvironmentServicesComponent } from './environment-services/environment-services.component';
import { DataServicesComponent } from './data-services/data-services.component';
import { ToolServicesComponent } from './tool-services/tool-services.component';
import { TicketStatusComponent } from './ticket-status/ticket-status.component';
import { RedSimulatorStatusComponent } from './red-simulator-status/red-simulator-status.component';
import { PerformanceEngineeringComponent } from './performance-engineering/performance-engineering.component';
import { EngageeDeptComponent } from './engagee-dept/engagee-dept.component';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EnvironmentServicesComponent,
    DataServicesComponent,
    ToolServicesComponent,
    TicketStatusComponent,
    RedSimulatorStatusComponent,
    PerformanceEngineeringComponent,
    EngageeDeptComponent,
    AdditionalServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
