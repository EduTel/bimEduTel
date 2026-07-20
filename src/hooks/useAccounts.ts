import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Account, getAccounts } from '../services/accountService';

type StackParamList = {
  Accounts: undefined;
  AccountDetail: { account: Account };
};
type NavigationProp = StackNavigationProp<StackParamList, 'Accounts'>;

export const useAccounts = () => {
  const navigation = useNavigation<NavigationProp>();
  const [accounts, setAccounts] = useState<Account[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchAccounts = async () => {
    try {
      const data = await getAccounts();
      setAccounts(data);
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);
  return { accounts, loading, navigation, fetchAccounts };
};
