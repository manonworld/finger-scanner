import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor( private sqlite: SQLite ) {  }

  createDb() {
    this.connect().then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS user(email VARCHAR(255), password VARCHAR(255), apiToken VARCHAR(255))', [])
        .then(() => console.log('Table Created'))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }

  saveUser(email : string, password : string, apiToken : string) {
    this.connect().then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO user(email, password, apiToken) VALUES (?, ?, ?)', [email, password, apiToken])
        .then(() => alert('User Inserted'))
        .catch(e => alert(JSON.stringify(e)));
    })
    .catch(e => alert(JSON.stringify(e)));
  }

  getUser(): any {
    return new Promise((resolve) => {
      this.connect().then((db: SQLiteObject) => {
        db.executeSql('SELECT email, password, apiToken FROM user LIMIT 1', [])
          .then((data) => {
            return resolve(data.rows.item(0));
          })
          .catch(e => alert(JSON.stringify(e)));
      })
      .catch(e => alert(JSON.stringify(e)));
    });
  }

  connect() {
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
  }

}
