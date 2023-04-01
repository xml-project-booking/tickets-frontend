export class FlightTicket {

  public from:String = '';
  public to:String = '';
  public date:Date = new Date();
  public numberOfSeats:number=0;


  public constructor(obj?: any) {
      if (obj) {
         
          this.from=obj.from;
          this.to = obj.to;
          this.date = obj.date;
          this.numberOfSeats = obj.numberOfSeats;
      }
  }
}