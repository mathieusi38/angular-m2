import { Component } from '@angular/core';
import { Comment } from 'src/app/models/interfaces';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, collection, addDoc, getDocs, getDoc  } from '@angular/fire/firestore';
//import {AngularFirestore } from "@angular/fire/compat/firestore";
import { CommentsService } from 'src/app/services/comments.services';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  comments!: Observable<any>;
  inProgress: Comment[] = [];
  done: Comment[] = [];
  console = console;
  displayedColumns: string[] = ['title', 'description', 'edit', 'remove'];
  dataComment = {
    title: '',
    description: '',
  };

  constructor(private dialog: MatDialog, private store: Firestore, private CommentsService: CommentsService) {
  }

  ngOnInit(): void {
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
      this.CommentsService.addComment(result.comments);
    });
  }

  deleteComment(id: string) {
    this.CommentsService.deleteComment(id);
  }

  updateComments(id: string) {

    this.CommentsService.getComment(id).then((commentData) => {
      const dialogRef = this.dialog.open(CommentDialogComponent, {
        width: '270px',
        data: {
          title: commentData['title'],
          description: commentData['description'],
        },
      }); 
      dialogRef
      .afterClosed()
      .subscribe((result) => {
        if (!result) {
          return;
        }
        this.CommentsService.updateComment(id ,result.comments);
      });
      
    }).catch((error) => {
      throw new Error("no comment find");
    });

  }



}
