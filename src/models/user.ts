export enum Gender {
    Male,
    Female,
    Other,
  }
  
  export default class User {
    constructor(
      public id: number,
      public token: string,     // for json web token
      public tokenExpiry: Date,
      public username: string,
      public password: string,
      public email: string,
      public firstName: string,
      public lastName: string,
      public age: number,
      public gender: Gender,
      public isAdmin: boolean
    ) {}
  }