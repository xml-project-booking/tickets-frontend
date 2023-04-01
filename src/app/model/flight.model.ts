export class Flight {
    public from:String = '';
    public to:String = '';
    public price:number = 0;
    public freeseats:number=0;
    public date:Date = new Date()
    public departureTime:String ='';
    public totalPrice: number = 0;
    public id: string = '';


    public constructor(obj?: any) {
        if (obj) {
           
            this.from=obj.from;
            this.to = obj.to;
            this.price = obj.price;
            this.date = obj.date;
            this.departureTime = obj.departureTime;
            this.id = obj.id;
        }
    }
}