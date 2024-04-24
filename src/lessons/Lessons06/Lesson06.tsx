function Lesson06() {
  // 1. Type - string:
  let userName: string = "Tom";
  console.log(userName);

  userName = "2";
  userName = 1 + 3 + "3";
  // userName = 2; - Fehler!
  console.log(userName);

  const message: string = `Hello, ${userName}`;

  // 2. Type - number:
  let luckyNumber: number = 23;
  luckyNumber = 24.5;
  //   luckyNumber = 23 + '1'; - Fehler!

  //   3. Type - boolean:
  let isAdmin: boolean = true;
  isAdmin = true;
  //   isAdmin = null; - Fehler!

  //   4. Type - null and underfined:
  // Type null = null !!!
  let emplyVar: null = null;

  // Type undefined = undefined !!!
  let exampleUnd: undefined = undefined;
  // exampleUnd = null; - Fehler!

  // 5. Type - Array:
  const colors: string[] = ["red", "green", "black"];
  colors.push("blue");
  colors[0] = "Yellow";
  // colors[0] = null; - Fehler!
  console.log(colors);

  const numbersArray = [3, 5, 4]; // automatisch Type number!
  // numbersArray.push("red"); - Fehler!
  console.log(numbersArray);

  //   6. Type - tupel:
  const fruits: [string, number, string] = ["apple", 3, "grape"];
  console.log(fruits);
  // fruits[3] = "banana"; - Fehler!

  // 7. Type - Funktion:

  // void:
  const showMessage = (age: number, firstName: string = "Tom"): void => {
    console.log("Hi");
  };
  showMessage(24);
  const showMessageWithName = (
    firstName: string = "Tom",
    age: number
  ): void => {
    console.log(`Hello ${firstName} ${age}`);
  };
  showMessageWithName(undefined, 24);

  //   return:
  //   const showMessageWithReturnName = (
  //     firstName: string = "Tom",
  //     age: number
  //   ): string => {
  //     return `Hello ${firstName} ${age}`;
  //   };
  const showMessageWithReturnName = (
    firstName: string = "Tom",
    age: number
  ): [string, number] => {
    // const userData: [string,number] = [firstName, age]; // array
    // return userData;
    return [firstName, age]; // tupel
  };
  console.log(showMessageWithReturnName("Bob", 89));

  // 8. Type any:
  let city: any = 23;
  city = "Berlin";

  // 9. Type object with interface and type:
  interface User {
    name: string;
    age?: number; // nicht unbeding erforderlich!
  }
  interface User {
    job: string;
  }
  const userData: User = { name: "Mary", job: "developer" };
  console.log(userData);
  interface Admin extends User {
    isAdmin: boolean;
  }
  const adminData: Admin = {
    name: "John",
    age: 45,
    job: "developer",
    isAdmin: false,
  };
  const usersData: User[] = [
    { name: "Mary", job: "developer" },
    { name: "Mary", job: "developer" },
    { name: "Fred", job: "manager" },
  ];

  // type

  type Animal = {
    name: string;
    weight?: number;
  };

  const animal: Animal = {
    name: "Lion",
    // weight:200
  };

  type NewAnimal = Animal & { country: string };
  const newAnimal: NewAnimal = {
    name: "Zebra",
    weight: 150,
    country: "Afrika",
  }
  
  type CustomType = string | number;
  let number: CustomType = 23;
  number = 12;
  number = "Number";

  return <div>Lesson06 - {message}</div>;
}

export default Lesson06;
