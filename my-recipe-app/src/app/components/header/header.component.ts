import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService
  ) {}
  isSignedIn: boolean;

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
      console.log(val);
    });
  }

  // Removes the token and signs the user out
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['landingpage']);
  }
}
