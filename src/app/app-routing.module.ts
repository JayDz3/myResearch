import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { IdeasComponent } from './pages/ideas/ideas.component';
import { RegisterComponent } from './pages/register/register.component';
import { HypothesisComponent } from './pages/hypothesis/hypothesis.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
 { path: 'login', component: LoginComponent},
 { path: 'notes', component: NotesComponent },
 { path: 'ideas', component: IdeasComponent },
 { path: 'hypothesis', component: HypothesisComponent },
 { path: 'register', component: RegisterComponent },
 { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
