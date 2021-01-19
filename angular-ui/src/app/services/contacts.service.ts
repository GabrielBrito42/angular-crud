import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { FormGroup } from '@angular/forms'

const baseUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<any>{
    return this.http.get(baseUrl + '/contacts').toPromise()
  }

  create(data: FormGroup): Promise<any>{
    return this.http.post(baseUrl + '/contacts/add-contact', data).toPromise()
  }

  addPicture(file: FormData): Promise<any>{
    return this.http.post(baseUrl + '/contacts/add-picture', file).toPromise()
  }

  delete(cpf: any): Promise<any>{
    return this.http.post(baseUrl + '/contacts/remove-contact', cpf).toPromise()
  }

  edit(contact: any){
    this.http.post(baseUrl + '/contacts/edit-contact', contact).toPromise()
  }
}
