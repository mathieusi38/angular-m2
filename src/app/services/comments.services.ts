
import { Injectable } from '@angular/core';
import { Firestore, getDoc, getDocs, collection, doc, deleteDoc } from '@angular/fire/firestore';
import { Comment } from '../models/interfaces';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  
  constructor( private store: Firestore) { 

  }


  getComments() {
    let comments: Comment[] = [];
   // return getObservable<Comment[]>(collection(this.store, 'comments'));
    getDocs(collection(this.store, 'comments')).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            comments.push(doc.data() as Comment);
            comments[comments.length-1].id = doc.id;

        });
     });

    return comments;

    }

    deleteComment(id: string) {
        //Delete a document with a known ID
        deleteDoc(doc(this.store, 'comments', id));
    }
}