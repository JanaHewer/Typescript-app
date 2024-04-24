// import "./ styles.css";

function Lesson07() {
  // generic

  type CustomArrayType<T = string> = T[];

  const numbersArray: CustomArrayType<number> = [2, 3];
  const stringArray: CustomArrayType<string> = ["2", "3"];

  type CustomArrayTupelType<T = string> = [string, T];
  const arrayMix1: CustomArrayTupelType = ["apple", "2"]; // es wird [string, string] erwartet
  const arrayMix2: CustomArrayTupelType<number> = ["apple", 2]; // es wird [string, number] erwartet

  // type mit interface:

  interface Fruits {
    name: string;
    weight: number;
  }
  const fruits1: Fruits = {
    name: "Apple",
    weight: 4,
  };

  interface FruitsGeneric<Type> {
    name: string;
    weight: Type;
  }

  const fruits2: FruitsGeneric<string> = {
    name: "Apple",
    weight: "4",
  };

// enum:

enum Colors {Red, Black=9, Green};
// console.log(Colors);
let color: Colors = Colors.Red;
color = 0;
console.log(color);

// switch case:

enum WeathersCode {
    SQ = "SQ",
    PO = "PO",
    FC = "FC",
    BR = "BR",
    HZ = "HZ",
    FU = "FU",
    DS = "DS",
    SS = "SS",
  }

  const decode = (codeOfWeather: WeathersCode): string => {
    switch (codeOfWeather) {
      case WeathersCode.SQ:
        return "шквал";
      case WeathersCode.PO:
        return "пыльный вихрь";
      case WeathersCode.FC:
        return "торнадо";
      case WeathersCode.BR:
        return "дымка (видимость от 1 до 9 км)";
      case WeathersCode.HZ:
        return "мгла (видимость менее 10 км)";
      case WeathersCode.FU:
        return "дым (видимость менее 10 км)";
      case WeathersCode.DS:
        return "пыльная буря (видимость менее 10 км)";
      case WeathersCode.SS:
        return "песчаная буря (видимость менее 10 км) ";
    }
  };
  console.log(decode(WeathersCode.FC));





  return <div>Lesson07</div>;
}

export default Lesson07;
