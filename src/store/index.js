import { atom } from "recoil";

export const $ServerUrl = atom({
  key: "$ServerUrl",
  default: "http://localhost/php/abaad",
  // default: "https://www.easetasks.com/abaad",
});
