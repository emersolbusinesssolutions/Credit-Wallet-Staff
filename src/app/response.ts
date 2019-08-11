export interface Response {
    status : string;
    message: string;
    token : string;
    user : object;
    outstandingbalance: number;
    paidbalance : number;
    rejected : number ;
    completed : number;
}
