import { AngularFireAuth } from 'angularfire2/auth';
import {Injectable} from "@angular/core";
import * as firebase from 'firebase/app';

@Injectable()
export class Authentication {
	public token : string;
	constructor(private angularAuth : AngularFireAuth){
		this.setUp();
	}

 	setUp(){

 		this.token = this.getTokenFromLocalStorage();

 		this.angularAuth.authState.subscribe((firebaseUser)=>{
 			if(firebaseUser){
 				localStorage.setItem("token",firebaseUser.uid);
 				this.token = firebaseUser.uid;
 			}else{
 				localStorage.removeItem("token");
 				this.token = null;
 				// this.nativeStorage.remove("token");
 			}
 		});
 	}

 	logout(){
 		return this.angularAuth.auth.signOut().then(()=>{
      this.token = null;
    })
    .catch(console.log);
 	}

 	createUserWithEmailAndPassword(email,password){
 		return this.angularAuth.auth
 								.createUserWithEmailAndPassword(email,password)
  			
 	}

 	logInWithFacebook(){
 		let provider = new firebase.auth.FacebookAuthProvider();
 		return this.logInWithProvider(provider);
 	}

 	logInWithGoogle(){
 		let provider = new firebase.auth.GoogleAuthProvider();
 		return this.logInWithProvider(provider);	
 	}

 	logInWithProvider(provider){
 		return this.angularAuth.auth.signInWithRedirect(provider)
 				.then((result)=>{
 					return firebase.auth().getRedirectResult;
 				});
 	}

 	getTokenFromLocalStorage() : string{
 		// return this.nativeStorage.getItem("token");
 		// return Promise.resolve(true);
 		return localStorage.getItem('token');
 	}
}