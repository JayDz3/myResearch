import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { IdeasComponent } from './pages/ideas/ideas.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
 { path: 'notes', component: NotesComponent },
 { path: 'ideas', component: IdeasComponent },
 { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
