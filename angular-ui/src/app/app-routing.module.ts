import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
  {
    path:'add-contact',
    component: AddContactComponent,
    pathMatch: 'full'
  },
  {
    path:'',
    component: AgendaComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
