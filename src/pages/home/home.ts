import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SecondPage} from "../second/second";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  /** TODO: ionViewCanEnter()   Nav Guards
   * Fired before entering into a view, allows you to control whether
   * the view can be accessed or not (returning true or false).
   */
  ionViewCanEnter(){
    console.log("ionViewCanEnter HomePage.");
  }
  /** TODO: ionViewCanLeave() Nav Guards
   ionViewCanLeave(){
    console.log('ionViewCanLeave SecondPage.');
  }

   /** TODO: ionViewDidLoad():
   *   Fired only when a view is stored in memory.
   *  This event is NOT fired on entering a view that is already cached.
   *  It’s a nice place for init related tasks. **/
  ionViewDidLoad(){
    console.log("ionViewDidLoad HomePage.");
  }

  /** TODO: ionViewWillEnter():
   *  It’s fired when entering a page, before it becomes the active one.
   *   Use it for tasks you want to do every
   *  time you enter in the view (setting event listeners, updating a table, etc.).
   *  **/
  ionViewWillEnter(){
    console.log('ionViewWillEnter HomePage.');
  }
  /** TODO: ionViewDidEnter()
   *  Fired when entering a page, after it becomes the active page.
   *  Quite similar to the previous one. **/
  ionViewDidEnter(){
    console.log('ionViewDidEnter HomePage.');
  }

  /** TODO: ionViewWillLeave()
   * Fired when you leave a page, before it stops being the active one.
   *  Use it for things you need to run every time you are leaving a
   *  page (deactivate event listeners, etc.).
   *  **/
  ionViewWillLeave(){
    console.log('ionViewWillLeave HomePage.');
  }

  /** TODO: ionViewDidLeave()
   * Fired when you leave a page, after it stops being the active one.
   * Similar to the previous one.
   */
  ionViewDidLeave(){
    console.log('ionViewDidLeave HomePage.');
  }

  /** TODO: ionViewWillUnload():
   * Fired when a view is going to be completely removed (after leaving a non-cached view).
   */

  ionViewWillUnload(){
    console.log('ionViewWillUnload HomePage.');
  }



  btnSecondClick() {
    this.navCtrl.push(SecondPage);
  }
}
