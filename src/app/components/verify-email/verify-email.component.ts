import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})

export class VerifyEmailComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
    authService.afAuth.authState.subscribe((user) => {
      if (user && user.emailVerified) { 
         this.router.navigate(['bejelentesek'])
      }
    });
  } 

  ngOnInit() { 
  }

}
