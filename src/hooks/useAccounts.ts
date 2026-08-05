import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getAccounts } from '../services/accountService';
import { Account } from '../models/Account';

type StackParamList = {
  Accounts: undefined;
  AccountDetail: { account: Account };
};
type NavigationProp = StackNavigationProp<StackParamList, 'Accounts'>;

export const useAccounts = () => {
  const navigation = useNavigation<NavigationProp>();
  const [accounts, setAccounts] = useState<Account[]>([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchAccounts = async () => {
    try {
      const data = await getAccounts();
      setAccounts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const refreshAccounts = async () => {
    setRefreshing(true);
    await fetchAccounts();
  };

  useEffect(() => {
    fetchAccounts();
  }, []);
  return { accounts, loading, refreshing, navigation, refreshAccounts };
};
