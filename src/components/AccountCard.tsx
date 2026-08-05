import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formatCurrency } from '../utils/currency';
import { Account } from '../models/Account';

export const AccountCard = ({
  account,
  onPress,
}: {
  account: Account;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <View>
        <Text>{account.type}</Text>
        <Text>{account.number}</Text>
      </View>
      <Text>Saldo Disponible</Text>
      <Text>{formatCurrency(account.balance)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ff0000',
  },
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
  },
});
