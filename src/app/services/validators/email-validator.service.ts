import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService {

  static isValid(control: FormControl){
 
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = re.test(control.value);
      
      if (!result) {
        return {
          'email:validation:fail' : true
        }
      }
      
      return null;
  }

}
