import { DataService } from './services/data.service';
import { USER_DATA } from './model/mocks';
import { User } from './model/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-app';

  moreInfo(user: User) {
    alert(`${user.firstName} is working with ${user.company}!`);
  }

  ngOnInit(){
    // this.users = USER_DATA;
    // this.users = this.dataService.getData();
    this.dataService.getApiData()
      .subscribe(data => this.users = <User[]>data,
        err => console.log(err),
        () => console.log("Data arrived!"));
  }

  constructor(private dataService : DataService){
    
  }

  users: User[];
}
