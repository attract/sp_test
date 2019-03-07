import { Injectable } from '@angular/core';
import { IUser, User } from './User.model';
import { HttpParams } from '@angular/common/http';
import { LIMIT_ON_PAGE } from '../../constants';

/**
 * Users Service
 */
let info={
      id:0,
      name:'Allie Bates',
      added:'15 Mar, 2017',
      profile_photo:'http://dl4.joxi.net/drive/2019/03/07/0002/1932/194444/44/3fca5a1748.png',
      main_photo:'http://dl3.joxi.net/drive/2019/03/07/0002/1932/194444/44/666274d122.png',
      photos:[
          'http://dl3.joxi.net/drive/2019/03/07/0002/1932/194444/44/666274d122.png',
          'http://dl3.joxi.net/drive/2019/03/07/0002/1932/194444/44/666274d122.png',
          'http://dl3.joxi.net/drive/2019/03/07/0002/1932/194444/44/666274d122.png'],
      gender:'Female',
      age:32,
      residence:'470 Brielle Shoals,Toronto.',
      appearance:'Slim, tall, brunette, brown eyes small nose and mouth, caucasian.',
      crime:'Cauch stealing expenssive cosmetics products under her bluse.',
      action_taken:'Took her details, ID copy and some photos of her. He agreed on payment of stolen products. Report sent to policy department.',
      additional_note:'She’s an usual client on the shop. We recommend always keeping an eye',
      categories:['Thiefs'],
    }
;

@Injectable()
export class UserService {

  /* Get drivers and customers */
    getList() {
      let newList=[];
      for(let i=0;i<LIMIT_ON_PAGE;i++){
        let info1=Object.assign({id: new Date().getTime()},new User().addData(info));
          newList.push( info1);
      }
      return newList;
  }
}
