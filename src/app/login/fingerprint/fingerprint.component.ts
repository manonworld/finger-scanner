import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss'],
})
export class FingerprintComponent implements OnInit {

  dbData: any;

  constructor(private faio: FingerprintAIO, private http: HTTP, private db: DbService) { }

  ngOnInit() {}

  authenticateUsingFingerprint() {
    this.faio.isAvailable().then((result: any) => {
      this.faio.show({
        cancelButtonTitle: 'Cancel',
        description: "You can authenticate using your fingerprint associated with this device",
        disableBackup: true,
        title: 'Authenticate',
        fallbackButtonTitle: 'Back',
        subtitle: 'Authenticate Using Fingerprint'
      })
        .then((result: any) => {
          this.performServerAuth();
        })
        .catch((error: any) => {
          alert(error);
        });

    })
      .catch((error: any) => {
        alert(error);
      });
  }

  performServerAuth(): any {
    this.db.getUser().then((data) => {
      alert(JSON.stringify(data));
    });
  }

}
