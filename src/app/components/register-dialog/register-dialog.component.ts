import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent  {

 title: string;
 message: string;

  constructor(private dialogRef: MatDialogRef<RegisterDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
   this.title = data.title;
   this.message = data.message;
  }

  close(): void {
   this.dialogRef.close();
  }

}
