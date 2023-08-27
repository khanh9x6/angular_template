import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-other',
    templateUrl: './other.component.html',
    styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
    profileForm!: FormGroup;

    constructor(private formDataService: FormService) {
    }

    ngOnInit() {
        this.profileForm = this.formDataService.profileForm;
        console.log("OtherComponent this.profileForm", this.profileForm);
        // Check if the form is correctly assigned
        this.formDataService.search$.subscribe(() => {
            this.search();
        });
    }

    search() {
        // Implement your search logic here
        console.log("OtherComponent search this.profileForm", this.profileForm);
    }
}
