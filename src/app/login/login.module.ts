import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HomeButtonComponent } from '../home-button/home-button.component';
import { FingerprintComponent } from './fingerprint/fingerprint.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage, 
    HomeButtonComponent,
    FingerprintComponent
  ]
})
export class LoginPageModule {}
