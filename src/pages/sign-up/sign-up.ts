import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Authentication } from '../../services/authentication';
import { HomePage } from '../home/home';
/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

	email : string = "demo@codigofacilito.com";
	password : string;

  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private auth : Authentication) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  createAccount(){
  	this.auth.createUserWithEmailAndPassword(this.email,this.password)
  			.then(r => this.popToRoot()).catch(this.handleError);

  }

  facebookLogIn(){
  	this.auth.logInWithFacebook()
  			.then(r => this.popToRoot()).catch(this.handleError);
  }

  googleLogIn(){
  	this.auth.logInWithGoogle()
  	.then(r => this.popToRoot()).catch(this.handleError);
  }

  popToRoot(){
  	this.navCtrl.setPages([
		  { page: HomePage }
		]);
  }

  handleError(err){
  	console.log(err);
  }

}
