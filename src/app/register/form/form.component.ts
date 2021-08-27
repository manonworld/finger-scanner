import { Component, OnInit, Input } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { EmailValidatorService } from '../../services/validators/email-validator.service';
import { PasswordValidatorService } from '../../services/validators/password-validator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() account: FormGroup;

  constructor( 
    private http: HTTP, 
    private formBuilder: FormBuilder,
    private db: DbService,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.account = this.formBuilder.group({
      email: [ '', Validators.compose([ Validators.required, EmailValidatorService.isValid ]) ],
      password: [ '', Validators.compose([ Validators.required, PasswordValidatorService.isValid ]) ],
      confirmation: [ '', Validators.compose([ Validators.required, PasswordValidatorService.isValid ]) ]
    });
    this.db.createDb();
  }

  createAccount() {
    this.http.setHeader('*', 'Content-Type', 'application/json');
    this.http.setDataSerializer('json');
    this.http.post('https://api.manonworld.de/register', {
      "email": this.account.get('email').value,
      "password": this.account.get('password').value
    }, {})
      .then(data => {
        let result = JSON.parse(data.data);
        this.db.saveUser(
          result.email,
          this.account.get('password').value,
          result.apiToken,
        );
        this.router.navigate(['/login']);
      })
      .catch(error => {
        let errors = JSON.parse(error.error);
        if ( error.status === 422 ) {
          for ( let i = 0; i < errors.length; i++ ) {
            if ( errors[i].messageTemplate )
              this.toast.presentToast('danger', 4000, errors[i].messageTemplate);
          }
        }
      });
  }

}
