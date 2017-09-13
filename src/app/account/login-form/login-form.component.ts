import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LoginForm } from './login-form';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { AuthResponse } from './auth-response';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    private loginUrl: string = "http://localhost:5000/api/appuser/login";
    message: string = null;
    model: LoginForm = new LoginForm();
    submitted: boolean = false;

    constructor(private http: Http) {
    }

    ngOnInit() {
    }

    login(): Promise<string> {
        this.submitted = true;

        // call api to login
        return this.http.post(this.loginUrl, this.model)
            .map(response => response.json())
            .map(response => {
                if(response) {
                    localStorage.setItem('auth_token', response.token);

                    // todo: redirect to homepage
                    return true;
                }
                else {
                    this.message = 'Login failed, please try again.';
                    this.submitted = false;
                }
            })
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        // todo: centralize error handling
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
