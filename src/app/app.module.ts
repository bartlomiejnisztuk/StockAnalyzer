import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatButtonModule,
  MatButtonToggleModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  // exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
