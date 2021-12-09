export const dialingCodes = {
  Japan: {
    prefix: '+81',
    country: 'Japan',
  },
  USA: {
    prefix: '+1',
    country: 'USA',
  },
  Korea: {
    prefix: '+81',
    country: 'Korea',
  },
};

export type NationalCode = keyof typeof dialingCodes;
