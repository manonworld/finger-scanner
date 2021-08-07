import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // dbData: any;

  // constructor(private faio: FingerprintAIO, private http: HTTP) { }

  // sendRequest() {
  //   this.faio.isAvailable().then((result: any) => {
  //     this.faio.show({
  //       cancelButtonTitle: 'Cancel',
  //       description: "You can authenticate using your fingerprint associated with this device",
  //       disableBackup: true,
  //       title: 'Authenticate',
  //       fallbackButtonTitle: 'Back',
  //       subtitle: 'Authenticate Using Fingerprint'
  //     })
  //       .then((result: any) => {
  //         this.http.get('https://run.mocky.io/v3/b9f61a48-bb5b-44e3-affe-7d17f22c184b', {}, {})
  //           .then(data => {
  //             this.dbData = JSON.parse(data.data).data;
  //           })
  //           .catch(error => {
  //             console.log(error.status);
  //             console.log(error.error);
  //             console.log(error.headers);
  //           });
  //       })
  //       .catch((error: any) => {
  //         alert(error);
  //       });

  //   })
  //     .catch((error: any) => {
  //       alert(error);
  //     });
  // }


}
