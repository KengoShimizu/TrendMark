// import { sample } from "./Function";
//////////////////////////////////////////////////////
// 入力フォームのバリデーション定義
//////////////////////////////////////////////////////

export const sample_ = (data: any) => {
  return 1;
}

export default class Validation {
  static formValidate = (type: string, value: any) => {
    switch (type) {
      case 'email':
        return sample_(value);
    }
  };
}