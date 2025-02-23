export class loginTestData{

    readonly userName: {
        [key: string]: string;
    };
    readonly password: {
        [key: string]: string;
    };

    constructor(){
        this.userName = {
            validUserName: "Admin",
            inValidUserName: "hello"
        },
        this.password = {
            validPassword: "admin123",
            inValidPassword: "hello123"
        }
    }
}