import { atom } from "recoil";

interface User {
  name?: string;
  email?: string;
  picture?: string;
}

export const userStateAtom = atom<User | undefined>({
  key: "userState",
  default: null,
});
