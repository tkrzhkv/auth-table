import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface IUsers {
  name: string;
  age: string;
  topics: {
    value: string;
    label: string;
  };
  id: number;
  is_post?: boolean;
}

const { persistAtom } = recoilPersist();
export const userFormDataPersistAtom = atom<IUsers[]>({
  default: [],
  key: "userFormData",
  effects_UNSTABLE: [persistAtom],
});
