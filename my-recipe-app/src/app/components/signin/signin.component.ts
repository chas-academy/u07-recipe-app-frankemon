import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  errors = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) {
    // User email and password stored here
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }

  ngOnInit() {}

  // Submits and resets the form, calls authService
  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['saved-recipes']);
      }
    );
  }

  // Handle response
  responseHandler(data) {
    this.token.handleData(data.access_token);
  }
}
