export class Flight {
    public from:String = '';
    public to:String = '';
    public price:number = 0;
    public freeseats:number=0;
    public Date:Date = new Date()
    public departureTime:String ='';


    public constructor(obj?: any) {
        if (obj) {
           
            this.from=obj.from;
            this.to = obj.to;
            this.price = obj.price;
            this.Date = obj.Date;
            this.departureTime = obj.departureTime;
        }
    }
}