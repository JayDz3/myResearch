import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil, switchMap, take, catchError } from 'rxjs/operators';
import { MyUser} from '../../interfaces';
import { RegisterService } from '../../services/register.service';

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

  constructor(private uf: FormBuilder, private service: RegisterService) { }

  ngOnInit(): void {}

  showDialog(message: string): void {
   alert(message);
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
      this.showDialog('This email has already been used');
     }
    });
  }

  ngOnDestroy() {
   this.onDestroy$.next();
  }

}
