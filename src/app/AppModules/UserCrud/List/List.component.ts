import { Component, ViewChild , HostListener} from '@angular/core';
import { IUser, User } from '../../../EntityModules/User/User.model';
import { UserService } from '../../../EntityModules/User/User.service';

@Component({
  selector : 'list',
  templateUrl : 'List.component.html',
  styleUrls : ['List.component.less']
})


export class ListComponent {

  list:IUser[];
  type:number = 0; // 1 - list, 0 - card
  loader:boolean = false;
    slideConfig:any={
        centerMode: true,
        centerPadding: '25px',
        dots: false,
        infinite: false,
        adaptiveHeight: true
    }

  constructor(
    private userService:UserService
  ) { }

  getData(){
      this.list=this.list.concat(this.userService.getList());
  }

  updateList(clearList:boolean = true){
      if(clearList) this.list=[];
      this.loader=true;
      setTimeout(()=>{ //Simulate time to run a request
          this.loader=false;
          this.getData();
      },2000);
  }

  afterSlideChange(val){
    if(val.currentSlide+1==this.list.length){
        this.updateList(false);
    }
  }

  changeType(val){
    this.type=val;
    this.updateList();
  }

  ngOnInit() {
    this.updateList();

    //Add items to the list when user scrolling
    $('.wrapper').scroll(() => {
      if(this.type==1 && this.loader==false ){
          let heightContent=$('.page-wrapper').height();
          let scrollPosition=$('.wrapper').scrollTop()+$('.wrapper').height();
          if(heightContent<scrollPosition+100){
              this.updateList(false);
          }
      }
    });
  }

}
