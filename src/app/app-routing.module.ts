import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
const routes: Routes = [  
  {
    path:'',component:SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
