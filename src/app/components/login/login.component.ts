import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
  });

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit( formData: FormGroup, loginDirective: FormGroupDirective){
    const email = formData.value.email;
    const password = formData.value.password;
    this.authService.SignIn(email, password);
  }

  onGoogleClick() {
    this.authService.GoogleAuth();
  }

}
