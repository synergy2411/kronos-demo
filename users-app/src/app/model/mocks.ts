import { User } from './user';
export const USER_DATA : User[] = [
    {
      "firstName": "Bill",
      "lastName": "Gates",
      "dob": new Date("Dec 2, 1965"),
      "isWorking": true,
      "income": 50000,
      "company": "Microsoft",
      "image": "./assets/images/bill.jpg",
      "vote": 150
    },
    {
      "firstName": "Steve",
      "lastName": "Jobs",
      "dob": new Date("Dec 2, 1965"),
      "isWorking": false,
      "income": 0,
      "company": "Apple",
      "image": "./assets/images/steve.png",
      "vote": 180
    },
    {
      "firstName": "Tim B.",
      "lastName": "Lee",
      "dob": new Date("Dec 2, 1965"),
      "isWorking": true,
      "income": 30000,
      "company": "World Wide Web",
      "image": "./assets/images/tim.jpg",
      "vote": 120
    }
  ]