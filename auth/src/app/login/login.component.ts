import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading = false;
  formData: any = {
    email: 'laura@gmail.com',
    password: '123'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) { }

  onSubmit(e: any) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;

    // Simulação de login
    setTimeout(() => {
      this.loading = false;
      if (email === 'laura@gmail.com' && password === '123') {
        const fakeAuthKey = 'fake-api-auth-key';
        this.sessionService.startSession(fakeAuthKey);
        notify('Logged In Successfully', 'success', 2000);
        this.redirectToReturnUrl();
      } else {
        notify('Credenciais inválidas', 'error', 2000);
      }
    }, 1000); // Simula um atraso de 1 segundo para o login
  }

  onCreateAccountClick = () => {
    this.router.navigate(['/create-account']);
  }

  redirectToReturnUrl() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '';
    console.log(returnUrl);
    if (!returnUrl) {
      returnUrl = '/product';
    }

    setTimeout(() => {
      document.location.href = returnUrl;
    }, 500);
  }
}


