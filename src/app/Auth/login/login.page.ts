import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { PasswordValidator } from 'src/app/validators/password';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm:FormGroup;
  email: string = "";
  password: string = "";
  isSubmitted=false;

  constructor(public formBuilder:FormBuilder) {  }

  ngOnInit() {
    this.ionicForm =this.formBuilder.group({
      email:['',[Validators.required,Validators.minLength(5),Validators.maxLength(7)]],
      // email:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
      password:['',[Validators.required,Validators.maxLength(9),Validators.minLength(4)]]

    })
  }
  submitForm(){
    this.isSubmitted=true;
    if(!this.ionicForm.valid){
      console.log("provide required values")
      return false;
    }else{
      console.log(this.ionicForm.value)
    }
  }
 
}
