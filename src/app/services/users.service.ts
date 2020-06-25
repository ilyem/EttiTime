import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export const url = "http://localhost:3000"
export class UserDetails {
  _id: string;
  email: string;
  name: string;
}

class TokenResponse {
  token: string;
}

export class TokenPayload {
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  private request(method: 'post' | 'get', type: 'login', user?: TokenPayload): Promise<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`${url}/api/users/${type}`, user);
    } else {
      base = this.http.get(`${url}/api/users/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request.toPromise();
  }

  public login(user: TokenPayload): Promise<any> {
    return this.request('post', 'login', user);
  }


  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }
}
