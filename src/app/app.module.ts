import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserModule } from './user.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task/task.component';
import { ShowTaskComponent } from './task/show-task/show-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticsComponent,
    ReportsComponent,
    TaskComponent,
    ShowTaskComponent,
    EditTaskComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,UserModule,HttpClientModule,ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
