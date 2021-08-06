import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private faio: FingerprintAIO) { }

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
