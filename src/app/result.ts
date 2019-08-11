import { Item } from "./app-service.service";


export class Result {
    status : string;
    message: string;
    token : string;
    user : Users;
    verificationdata : any
  calllogs: any;
  data?: any
}



export class Users {
    id : number;
    firstname: string;
    email : string;
    lastname : string;
}

