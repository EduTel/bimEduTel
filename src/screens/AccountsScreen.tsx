import React from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { AccountCard } from '../components/AccountCard';
import { useAccounts } from '../hooks/useAccounts';

export const AccountsScreen = () => {
  const { accounts, loading, refreshing, navigation, refreshAccounts } =
    useAccounts();

  if (loading) {
    return <ActivityIndicator style={styles.center} color="#f4511e" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={accounts}
        renderItem={({ item }) => (
          <AccountCard
            account={item}
            onPress={() =>
              navigation.navigate('AccountDetail', { account: item })
            }
          />
        )}
        refreshing={refreshing}
        onRefresh={refreshAccounts}
      />
    </View>
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
