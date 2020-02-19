import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MyUser} from '../../interfaces';
import { RegisterService } from '../../services/register.service';
import { RegisterDialogComponent } from 'src/app/components/register-dialog/register-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
 private onDestroy$ = new Subject<void>();
 user: MyUser;
 registerForm = this.uf.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  email: ['', Validators.required],
  password: ['', Validators.required]
});

  constructor(private uf: FormBuilder, private dialog: MatDialog, private service: RegisterService) { }

  ngOnInit(): void {}

  showDialog(message: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    
    dialogConfig.data = {
     id: 1,
     title: 'Register Dialog',
     message: `${message}`
    };

    this.dialog.open(RegisterDialogComponent, dialogConfig);
    
  }

  addNewUser(): void {
   let firstName: string = this.registerForm.get('firstName').value;
   let lastName: string = this.registerForm.get('lastName').value;
   let email: string = this.registerForm.get('email').value;
   let password: string = this.registerForm.get('password').value;
   this.user = { firstName, lastName, email, password };
   this.service.addUser(this.user).pipe(
    takeUntil(this.onDestroy$)
    ).subscribe(r => {
     if (r === true) {
      this.showDialog('Successfully Added');
     } else {
      this.showDialog('This email is in use');
     }
    });
  }

  ngOnDestroy() {
   this.onDestroy$.next();
  }

}
