import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private faio: FingerprintAIO, private http: HTTP) { }

  sendRequest() {
    this.http.get('https://run.mocky.io/v3/b9f61a48-bb5b-44e3-affe-7d17f22c184b', {}, {})
      .then(data => {
        alert(data.status);
        alert(data.data);
        alert(data.headers);
      })
      .catch(error => {
        alert(error.status);
        alert(error.error);
        alert(error.headers);
      });
  }

  authenticate() {
    this.faio.isAvailable().then((result: any) => {
      alert(result)
      this.faio.show({
        cancelButtonTitle: 'Cancel',
        description: "You can authenticate using your fingerprint associated with this device",
        disableBackup: true,
        title: 'Authenticate',
        fallbackButtonTitle: 'Back',
        subtitle: 'Authenticate Using Fingerprint'
      })
        .then((result: any) => {
          alert(result)
          alert("Successfully Authenticated!")
        })
        .catch((error: any) => {
          alert(error)
          alert("Match not found!")
        });

    })
      .catch((error: any) => {
        alert(error)
      });
  }


}
