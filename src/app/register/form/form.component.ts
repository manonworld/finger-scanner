import { Component, OnInit, Input } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Router } from '@angular/router';

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
    private router: Router
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
        let result = JSON.parse(data.data);
        this.db.saveUser(
          result.email,
          this.account.get('password').value,
          result.apiToken,
        );
        this.router.navigate(['/login'])
      })
      .catch(error => {
        console.log(error.error);
      });
  }

}
