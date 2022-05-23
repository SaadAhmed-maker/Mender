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
      email:['',[Validators.required]]


    })
  }

   get f(){
     return this.credentials.controls;
   }
}
