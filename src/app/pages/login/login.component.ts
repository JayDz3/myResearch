import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
 doDisable: boolean = false;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  loginForm = this.fb.group({
   email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
   password: ['', Validators.required]
 });

  ngOnInit(): void { }

  login(): void {
   let email: string = this.loginForm.get('email').value;
   let password: string = this.loginForm.get('password').value;
   
  }

}
