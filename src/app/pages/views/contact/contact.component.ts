import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() onContactFormSubmit = new EventEmitter<any>();
  contactFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    subject: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required])
  })
  constructor() { }
  @ViewChild('formDirective') public formDirective: NgForm;

  ngOnInit(): void {
    
  }

  submitContact(){
    if(this.contactFormGroup.invalid){
      return
    }

    this.onContactFormSubmit.emit(this.contactFormGroup.value);
  }

}
