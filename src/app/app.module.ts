import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { HeaderComponent } from './components/commons/header/header.component';
import { ComponentSidenavComponent } from './components/commons/component-sidenav/component-sidenav.component';
import { ComponentCreateUsersComponent } from './components/component-create-users/component-create-users.component';
import { ComponentListUsersComponent } from './components/component-list-users/component-list-users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentCreateUsersComponent,
    ComponentSidenavComponent,
    ComponentListUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
