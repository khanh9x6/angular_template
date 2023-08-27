import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
@NgModule({
    declarations: [
        AppComponent, FormComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
