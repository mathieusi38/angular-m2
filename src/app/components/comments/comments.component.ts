import { Component } from '@angular/core';
import { Comment } from 'src/app/models/interfaces';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, collection, addDoc, getDocs, getDoc  } from '@angular/fire/firestore';
//import {AngularFirestore } from "@angular/fire/compat/firestore";
import { CommentsService } from 'src/app/services/comments.services';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  comments: any;
  inProgress: Comment[] = [];
  done: Comment[] = [];
  console = console;

  constructor(private dialog: MatDialog, private store: Firestore, private CommentsService: CommentsService) {
    this.comments = this.CommentsService.getComments();
  }

  newComment(): void {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '270px',
      data: {
      },
    });
    dialogRef
    .afterClosed()
    .subscribe((result) => {
      if (!result) {
        return;
      }
      addDoc(collection(this.store, 'comments'), result.comments);
   // this.store.collection('comments').add(result.comments);
    });
  }



}
