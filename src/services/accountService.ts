export interface Account {
  id: number;
  number: string;
  type: string;
  balance: number;
}

export const getAccounts = async (): Promise<Account[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          number: '1234567890',
          type: 'Cuenta Débito',
          balance: 24580.3,
        },
        {
          id: 2,
          number: '9988776655',
          type: 'Cuenta Ahorro',
          balance: 1200.5,
        },
      ]);
    }, 1000);
  });
};
