import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/Operators';


/**
 * Generated class for the GyroscopePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gyroscope',
  templateUrl: 'gyroscope.html',
})
export class GyroscopePage {
  public gyroWatch: Observable<String>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gyroscope: Gyroscope) {

    
    let options: GyroscopeOptions = {
      frequency: 500
    };

    this.gyroWatch = this.gyroscope.watch(options).pipe(
      map(val => "#" + this.componentToHex(Math.abs(Math.floor(val.x * 100))) 
      + this.componentToHex(Math.abs(Math.floor(val.y * 100))) 
      + this.componentToHex(Math.abs(Math.floor(val.z * 100))) 
      )
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GyroscopePage');
  }  
  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

}
