import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Uploader } from '../../services/uploader';
import { ImagesService } from '../../services/images.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Authentication } from '../../services/authentication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	images : FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, 
  						public uploader : Uploader,
  						public imagesS : ImagesService,
              private auth : Authentication) {

  }

  ngOnInit(){
  	this.images = this.imagesS.all();
  }

  fileChanges(fileInput){
  	let files = fileInput.target.files;
  	this.uploader.uploadMultiple(files)
  			.then((results)=>{
  				console.log(results);
  			})
  			.catch(console.log);
  }

}
