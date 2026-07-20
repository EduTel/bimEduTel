import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Account } from '../services/accountService';
import { formatCurrency } from '../utils/currency';

type StackParam = {
  AccountDetail: { account: Account };
};

type AccountDetailProps = RouteProp<StackParam, 'AccountDetail'>;

export const AccountDetail = () => {
  const route = useRoute<AccountDetailProps>();
  const { account } = route.params;

  return (
    <View>
      <Text>cuenta</Text>
      <Text>{account.type}</Text>

      <Text>num de cuenta</Text>
      <Text>{account.number}</Text>

      <Text>saldo disponible</Text>
      <Text>{formatCurrency(account.balance)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
