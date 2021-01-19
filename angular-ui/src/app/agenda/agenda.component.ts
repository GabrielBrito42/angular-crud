import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../services/contacts.service'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { get } from 'lodash'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  contacts: any

  constructor(public contactService: ContactsService, public contactModal: MatDialog) { }

  async ngOnInit(){
    this.contacts = await this.contactService.getAll()
  }

  edit(contact: any){
    let dialogref = this.contactModal.open(ContactModalComponent, {data: contact})
    dialogref.afterClosed().subscribe(async result => {
      this.contacts = await this.contactService.getAll()
    })
  }

  async delete(contact: any){
    await this.contactService.delete(contact)
    this.contacts = await this.contactService.getAll()
  }
}

@Component({
  selector: 'modal',
  templateUrl: 'contact.modal.html',
  styleUrls: ['./agenda.component.scss']
})
export class ContactModalComponent {
  contactForm: FormGroup;
  imageView: any

  constructor(public dialogref: MatDialogRef<ContactModalComponent>, public formBuilder: FormBuilder,
              public contactService: ContactsService, @Inject(MAT_DIALOG_DATA) public contact: any) {
    this.contactForm = this.formBuilder.group({
      name: get(contact, 'name', ''),
      email: get(contact, 'email', ''),
      cpf: get(contact, 'cpf', ''),
      surname: get(contact, 'surname', ''),
      age: get(contact, 'age', ''),
      country: get(contact, 'country', ''),
      _id: get(contact, '_id', ''),
      picture: get(contact, 'picture', '')
    });
    this.imageView = get(contact, 'picture', '')
  }

  async onContactSubmit(): Promise<any>{
    this.contactForm.patchValue({picture: this.imageView})
    await this.contactService.edit(this.contactForm.value)
    this.dialogref.close();
  }

  closeModal(): void {
    this.dialogref.close();
  }

  async uploadPicture(event: any){
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('picture', file)
    this.imageView = await this.contactService.addPicture(formData)
    this.imageView = this.imageView.fileName
  }
}
