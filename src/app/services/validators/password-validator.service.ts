import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {

  static isValid(control: FormControl){
 
    let re = /^[a-zA-Z0-9]{4,255}$/;
      let result = re.test(control.value);
      
      if (!result) {
        return {
          'password:validation:fail' : true
        }
      }
      
      return null;
  }
}
