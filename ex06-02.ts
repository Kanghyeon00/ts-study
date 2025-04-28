// 기본 타입

(() => {
  let str: string = "hello";
  let age: number = 9;
  let done: boolean = true;
  let nullVal: null = null;
  let emptyVal: undefined = undefined;
  let todo: object = { title: "TS공부", done: false };
  let todoList: Array<string> = ["JavaScript", "TypeScript"];
  let todoList2: string[] = ["React", "Next.js"];
  let items: [string, number] = ["강석현", 26];
  let userName: any = "강슥현";
  userName = 555;

  let userName2: unknown = "TSTSTSTS";
  userName2 = 123;

  console.log(userName.toUpperCase());
  console.log(userName2.toUpperCase());
})();
