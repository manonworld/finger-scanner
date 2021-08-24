import { Component, OnInit, Input } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DbService } from '../../services/db.service';

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
    private db: DbService
  ) {}

  ngOnInit() {
    this.account = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmation: ['', Validators.required]
    });
    this.db.createDb();
  }

  createAccount()
  {
    this.http.setHeader('*', 'Content-Type', 'application/json');
    this.http.setDataSerializer('json');
    this.http.post('https://api.manonworld.de/register', {
      "email": this.account.get('email').value,
      "password": this.account.get('password').value
    }, {})
      .then(data => {
        this.db.saveUser(
          data.data.email,
          data.data.apiToken,
          this.account.get('password').value
        );
      })
      .catch(error => {
        alert(error.error);
      });
  }

}
