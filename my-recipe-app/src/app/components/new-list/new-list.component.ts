import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.sass'],
})
export class NewListComponent implements OnInit {
  listName: string;
  // Output for refreshing lists after creating new list
  @Output() createdList = new EventEmitter();
  @Output() handleIsLoading = new EventEmitter();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  handleCreateList(listName) {
    this.handleIsLoading.emit();
    this.userService
      .createList(listName)
      .subscribe(() => this.createdList.emit()); // Output for refreshing lists after creating new list
  }

  handleShowLists() {
    this.userService.getLists();
  }
}
