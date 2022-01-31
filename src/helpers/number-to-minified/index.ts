interface IStage {
  MAXIMUM: number;
  DIVIDER: number;
  POSTFIX: string;
}

const convertToMinifiedNumber = (number: number): string => {
  let convertedNumber: string = number.toFixed(1);

  const Stages: Record<string, IStage> = {
    HUNDRED: {
      MAXIMUM: 1000,
      DIVIDER: 1,
      POSTFIX: '',
    },
    THOUSANDS: {
      MAXIMUM: 1000000,
      DIVIDER: 1000,
      POSTFIX: 'K',
    },
    MILLIONS: {
      MAXIMUM: 1000000000,
      DIVIDER: 1000000,
      POSTFIX: 'M',
    },
    BILLIONS: {
      MAXIMUM: 1000000000000,
      DIVIDER: 1000000000,
      POSTFIX: 'B',
    },
  };

  // eslint-disable-next-line
  for (const stage in Stages) {
    const dividedNumber = number / Stages[stage].DIVIDER;

    if (number < Stages[stage].MAXIMUM) {
      convertedNumber = `${
        Number.isInteger(dividedNumber)
          ? dividedNumber
          : dividedNumber.toFixed(1)
      }${Stages[stage].POSTFIX ? ` ${Stages[stage].POSTFIX}` : ''}`;

      return convertedNumber;
    }
  }

  return convertedNumber;
};

export default convertToMinifiedNumber;
