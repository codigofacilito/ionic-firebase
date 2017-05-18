import {Injectable} from "@angular/core";
import { ImagesService } from './images.service';
import * as firebase from 'firebase';

@Injectable()
export class Uploader {
	storageRef : firebase.storage.Reference;
	
	constructor(private imagesS : ImagesService){
		this.storageRef = firebase.storage().ref();
	}

	upload(file){
		let ref = this.storageRef.child("/images/"+file.name);

		let uploadTask = ref.put(file);

		return new Promise((resolve,reject)=>{

			uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot)=>{
				
			},(error)=>{
				reject(error)
			},()=>{
				let fileUrl = uploadTask.snapshot.downloadURL;
				
				resolve(this.imagesS.save({
					url: fileUrl,
					name: file.name,
					created_at: firebase.database.ServerValue.TIMESTAMP
				}));


			});


		});
	}

	uploadMultiple(files){
		let promises = [];
		for (var i = 0; i < files.length; ++i) {
  		let file = files[i];
  		promises.push(this.upload(file));
  	}

  	return Promise.all(promises);
		
	}

}