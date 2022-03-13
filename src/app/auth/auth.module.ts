import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { reducers } from 'src/app/auth/store/reducers';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMessagesModule } from 'src/app/shared/types/modules/backendErrorMessages/backendErrorMessages.module';
import { PersistanceService } from '../shared/services/persistance.service';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent, HomepageComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
