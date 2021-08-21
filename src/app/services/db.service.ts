import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor( private sqlite: SQLite ) {  }

  createDb() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE user(email VARCHAR(255), password VARCHAR(255))', [])
          .then(() => alert('Table Created'))
          .catch(e => alert(e));
      })
      .catch(e => alert(e));
  }
}
