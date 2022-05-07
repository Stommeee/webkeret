import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddBejelentesComponent } from './components/add-bejelentes/add-bejelentes.component';
import { BejelentesekComponent } from './components/bejelentesek/bejelentesek.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bejelentesek', component: BejelentesekComponent,  canActivate: [AuthGuard] },
  { path: 'add-bejelentes', component: AddBejelentesComponent,  canActivate: [AuthGuard] },
  { path: 'add-bejelentes/:id', component: AddBejelentesComponent,  canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}