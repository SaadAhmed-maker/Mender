import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [  
  {
    path:'',component:SignUpComponent,
      },
      {
    path:'dash',component:DashboardComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
