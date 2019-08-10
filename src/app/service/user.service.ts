import {Injectable} from '@angular/core';
import {User} from '../model/user';

@Injectable({providedIn: 'root'})
export class UserService {
  static STATUS_ONLINE: boolean;
  userList: User[];
  loginUser: { userName: string; userId: number; status: boolean } = {
    userName: 'admin',
    userId: 1,
    status: true
  };

  login(user: User): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userList.length; i++) {
      if ((this.userList[i].userName === user.userName) && (this.userList[i].password === user.password)) {
        this.userList[i].status = UserService.STATUS_ONLINE;
        this.loginUser = this.userList[i];
        return true;
      }
    }
    return false;
  }
}
