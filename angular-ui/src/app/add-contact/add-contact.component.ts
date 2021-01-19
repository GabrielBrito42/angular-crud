import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  contactForm: FormGroup
  imageView: any

  constructor(private formBuilder: FormBuilder, private contactService: ContactsService,
              private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      picture: [null],
      name: [null, Validators.required],
      surname: [null, Validators.required],
      age: [null, Validators.required],
      country: [null, Validators.required],
      gender: [null, Validators.required],
      cpf: [null, Validators.required],
      email: [null, Validators.required]
    })
  }

  async onContactSubmit(){
    this.contactForm.patchValue({picture: this.imageView})
    await this.contactService.create(this.contactForm.value)
    this.router.navigate(['/'])
  }

  async uploadPicture(event: any){
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('picture', file)
    this.imageView = await this.contactService.addPicture(formData)
    this.imageView = this.imageView.fileName
  }
}
