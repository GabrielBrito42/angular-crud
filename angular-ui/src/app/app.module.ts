import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'

import { AddContactComponent } from './add-contact/add-contact.component';
import { FooterComponent } from './footer/footer.component'
import { ContactsService } from './services/contacts.service'
import { HttpClientModule } from '@angular/common/http';
import { AgendaComponent } from './agenda/agenda.component'
import { ContactModalComponent } from './agenda/agenda.component'

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    FooterComponent,
    AgendaComponent,
    ContactModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule, 
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
