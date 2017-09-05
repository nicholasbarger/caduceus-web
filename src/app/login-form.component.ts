import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { LoginForm } from './login-form';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
    private loginUrl = "http://localhost:5000/api/login";
    model = new LoginForm(null, null);
    submitted = false;

    constructor(private http: Http) {

    }

    login(): Promise<string> {
        // call api to login
        return this.http.get(this.loginUrl)
            .toPromise()
            .catch(this.handleError);

        
    }

    private handleError(error: any): Promise<any> {
        // todo: centralize error handling
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
