import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { IFriends } from "./friends";

@Component({
  moduleId: module.id,
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  providers: [HttpService]
})
export class FriendsComponent implements OnInit {

  friends: IFriends;

  constructor(private httpService: HttpService) { }

  loadFriendsList(){
    this.httpService.getFriendsList()
      .subscribe(
        data => (this.friends = data)
      );
  }

  ngOnInit() {
    this.loadFriendsList();
  }



}
