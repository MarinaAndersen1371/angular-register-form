import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './auth/components/homepage/homepage.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
