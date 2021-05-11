import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        RoverFormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
