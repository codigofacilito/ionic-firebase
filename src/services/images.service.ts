import { AngularFireDatabase } from 'angularfire2/database';
import {Injectable} from "@angular/core";
import * as firebase from 'firebase/app';
import { Image } from '../models/image';
import { FirebaseListObservable } from 'angularfire2/database';
import "rxjs/add/operator/map";

@Injectable()
export class ImagesService {

	constructor(private db : AngularFireDatabase){}

	save(image : Image){
		let dbRef = this.db.list("/images");
		return dbRef.push(image);
	}

	all() : FirebaseListObservable<any>{
		return this.db.list("/images",{
			query: {
				orderByChild: 'created_at'
			}
		}).map(arr => arr.reverse()) as FirebaseListObservable<any>;
	}
}