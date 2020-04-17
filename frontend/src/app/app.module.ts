import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormControl, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { AddroleComponent } from './components/addrole/addrole.component';


@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    AddroleComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }