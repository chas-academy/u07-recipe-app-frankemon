import { Component, OnInit } from '@angular/core';
import { List } from '../../List';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.sass'],
})
export class NewListComponent implements OnInit {
  title: string;
  listName: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  handleCreateList(listName) {
    this.userService.createList(listName);
  }

  handleShowLists() {
    this.userService.getLists();
  }

  // onSubmit() {
  //   if (!this.list_title) {
  //     alert('Please name your list first.');
  //     return;
  //   }

  //   const newList = {
  //     list_title: this.list_title,
  //   };

  //   this.list_title = '';
  // }
}
