import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { IdeasComponent } from './pages/ideas/ideas.component';
import { RegisterComponent } from './pages/register/register.component';
import { HypothesisComponent } from './pages/hypothesis/hypothesis.component';

const routes: Routes = [
 { path: 'notes', component: NotesComponent },
 { path: 'ideas', component: IdeasComponent },
 { path: 'hypothesis', component: HypothesisComponent },
 { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
