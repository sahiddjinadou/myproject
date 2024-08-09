import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { ShowTaskComponent } from './task/show-task/show-task.component';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'statistics', component: StatisticsComponent },
      { path: 'reports', component: ReportsComponent }
    ]
  },
  {
    path: 'taches',
    component: TaskComponent,
    children: [
      { path: '',component:ShowTaskComponent  },
      { path: 'edit', component:ShowTaskComponent  },
      { path: 'toutes-taches', component:EditTaskComponent }
      
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
