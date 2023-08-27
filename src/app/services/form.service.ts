import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    public _profileForm!: FormGroup;
    private searchSubject = new Subject<void>();
    constructor() { }

    get search$() {
        return this.searchSubject.asObservable();
    }

    triggerSearch() {
        this.searchSubject.next();
    }

    get profileForm(): FormGroup {
        return this._profileForm;
    }

    set profileForm(form: FormGroup) {
        this._profileForm = form;
    }
}
