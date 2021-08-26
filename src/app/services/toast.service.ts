import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor( private toastController: ToastController ) { }

  async presentToast( color: string, duration: number, message: string ) {
    const toast = await this.toastController.create({
      color: color,
      duration: duration,
      message: message
    });

    await toast.present();
  }
}
