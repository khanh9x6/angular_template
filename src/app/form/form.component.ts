import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    constructor(public fb: FormBuilder) { }

    profileForm = this.fb.group({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
    });

    ngOnInit() {
    }
}
