import * as yup from 'yup';

export const yupNameValidation = yup
  .string()
  .trim('名前に空白が含まれています')
  .strict(true)
  .required('名前を入力してください');

export const yunPhoneValidation = yup
  .string()
  .required('電話番号を入力してください')
  .length(11, '文字数に誤りがあります');
