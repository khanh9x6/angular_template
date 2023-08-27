import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    profileForm: FormGroup;

    constructor(public fb: FormBuilder, private formDataService: FormService) {
        this.profileForm = this.fb.group({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
        });
        this.formDataService.profileForm = this.profileForm;
    }
    ngOnInit() {
        console.log("FormComponent this.profileForm", this.profileForm);
    }
    search() {
        // Perform your search logic here
        // ...

        // Trigger the search event
        this.formDataService.triggerSearch();
    }
}
