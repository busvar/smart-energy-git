import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  surname: string;
  path: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public users: User[] = [];

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    this.http.get('assets/users.json').subscribe((data: any) => {
      this.users = data.users;
    });
  }

}
