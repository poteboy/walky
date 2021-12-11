import {NationalCode, dialingCodes} from '@src/constants';

export const formatPhoneNumer = (nationalCode: NationalCode, phone: string) => {
  switch (nationalCode) {
    case 'Japan':
      return (
        dialingCodes.Japan.prefix +
        ' ' +
        phone.slice(1, 3) +
        '-' +
        phone.slice(3, 7) +
        '-' +
        phone.slice(7, 11)
      );
    default:
      return phone.toString();
  }
};
