export class RegUser {
    public name:String = '';
    public surname:String = '';
    public phoneNumber:String = '';
    public email: String = '';
    public username:String = '';
    public password:String = '';
    public birthDate:String = '';


    public constructor(obj?: any) {
        if (obj) {
            this.password = obj.password;
            this.email = obj.email;
            this.name = obj.name;
            this.surname = obj.surname;
            this.phoneNumber = obj.phoneNumber;
            this.username = obj.username;
            this.birthDate = obj.birthDate;
        }
    }
}