import { User } from './../model/user';
import { Component, Input, EventEmitter, Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: "app-users",
    templateUrl: "./user.component.html",
    styleUrls: ['./user.component.css']
})
export class UsersComponent implements OnInit {

    ngOnChanges(change : SimpleChanges) {
        console.log("Changes fired!", change);
    }

    ngOnInit() {
        console.log("Init Fired!")
    }


    @Input('users')
    users: User[];

    @Output('xyz') childEvent = new EventEmitter<User>();

    info(user: User) {
        this.childEvent.emit(user);
    }

    dynamicClass = {
        'border': true,
        'feature': false
    };
    onToggle() {
        this.dynamicClass.border = !this.dynamicClass.border;
        this.dynamicClass.feature = !this.dynamicClass.feature;
    }


}