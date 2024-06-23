import { atom } from "recoil";

export const $ServerUrl = atom({
  key: "$ServerUrl",
  // default: "https://popular-sunrise-1b9fcd2825.strapiapp.com/api",
  default: "http://localhost:1337/api",
  // default: "https://www.easetasks.com/abaad",
});
