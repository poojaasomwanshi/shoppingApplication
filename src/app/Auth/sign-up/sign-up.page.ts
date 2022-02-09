import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder,private router: Router) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(7)]]
    })
  }
 
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
      //move to tabs after login
      this.router.navigate(['tabs/tab1'])
    }
  }
}
