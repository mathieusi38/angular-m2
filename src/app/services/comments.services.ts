
import { Injectable } from '@angular/core';
import { Firestore, getDoc, getDocs, collection, doc, deleteDoc, addDoc, collectionData, updateDoc } from '@angular/fire/firestore';
import { Comment } from '../models/interfaces';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  
  constructor( private store: Firestore) { 

  }

  addComment(newComment: Comment) {
    const collectionInstance = collection(this.store, 'comments');
    addDoc(collectionInstance, newComment)
  }

  getComments() {
    const comments = collection(this.store, 'comments');
    collectionData(comments, { idField: 'id' }).subscribe(value => {
    }) 

    return collectionData(comments, { idField: 'id' });
    }

    deleteComment(id: string) {
        //Delete a document with a known ID
        deleteDoc(doc(this.store, 'comments', id));
    }

    getComment(id: string) {
      const docInstance = doc(this.store, 'comments', id);
      return getDoc(docInstance).then((docSnapshot) => {
        if (docSnapshot.exists()) {
          return docSnapshot.data();
        } else {
          throw new Error("no comment find");
        }
      })
    }

    updateComment(id : string, updateComment : Comment) {
      const docInstance = doc(this.store, 'comments', id);
      updateDoc(docInstance, {
        title: updateComment.title,
        description: updateComment.description,
      })
    }

}