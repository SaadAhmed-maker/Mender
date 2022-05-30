import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }
  submitted = false;
  credentials!:FormGroup;

  ngOnInit(): void {

    this.credentials = this.formbuilder.group({
      user_name:['',Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mob_no:['',Validators.required]


    })
  }

   get f(){
     return this.credentials.controls;
   }
}
