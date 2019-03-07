export interface IUser  {
    id                     : number|string;
    name                   : string;
    profile_photo          : number|string;
    main_photo             : number|string;
    photos                 : (number|string)[];
    gender                 : number|string;
    age                    : number|string;
    residence              : number|string;
    appearance             : number|string;
    crime                  : number|string;
    action_taken           : number|string;
    additional_note        : number|string;
    added                  : number|string;
    categories             : (number|string)[];
}


export class User implements IUser {
    id                     : number|string;
    name                   : string;
    profile_photo          : number|string;
    main_photo             : number|string;
    photos                 : (number|string)[];
    gender                 : number|string;
    age                    : number|string;
    residence              : number|string;
    appearance             : number|string;
    crime                  : number|string;
    action_taken           : number|string;
    additional_note        : number|string;
    added                  : number|string;
    categories             : (number|string)[];

    constructor() {
       /* if(model){
            this.id = model.id;
        }
        this.addData(model);*/
    }

    addData(userIn ?: IUser) {
        let user: any = userIn || {};

        this.name                      = user.name || '';
        this.profile_photo             = user.profile_photo || null;
        this.main_photo                = user.main_photo || null;
        this.photos                    = user.photos || null;
        this.gender                    = user.gender || null;
        this.age                       = user.age || null;
        this.appearance                = user.appearance || null;
        this.residence                 = user.residence || null;
        this.crime                     = user.crime || null;
        this.action_taken              = user.action_taken || null;
        this.additional_note           = user.additional_note || null;
        this.added                     = user.added || null;
        this.categories                = user.categories || null;

        return this;
    }
}
