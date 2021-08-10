import { Component, OnInit } from '@angular/core';
import { List } from '../../List';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.sass'],
})
export class NewListComponent implements OnInit {
  listName: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  handleCreateList(listName) {
    this.userService.createList(listName);
  }

  handleShowLists() {
    this.userService.getLists();
  }
}
