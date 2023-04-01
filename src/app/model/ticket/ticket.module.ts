export class Ticket {
  public id:String = '';
  public userId:String = '';
  public flightId:string = '';
  public numberOfSeats:number=0;


  public constructor(obj?: any) {
      if (obj) {
         
          this.id = obj.id;
          this.userId = obj.userId;
          this.flightId = obj.flightId;
          this.numberOfSeats = obj.numberOfSeats;
      }
  }
}