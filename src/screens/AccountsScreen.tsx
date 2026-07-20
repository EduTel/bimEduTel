import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { ItemAccount } from '../components/ItemAccount';
import { useAccounts } from '../hooks/useAccounts';

export const AccountsScreen = () => {
  const { accounts, loading, navigation, fetchAccounts } = useAccounts();

  if (loading) {
    return <ActivityIndicator style={styles.center} color="#f4511e" />;
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetchAccounts} />
      }
    >
      <View style={styles.container}>
        <FlatList
          data={accounts}
          renderItem={({ item }) => (
            <ItemAccount
              account={item}
              onPress={() =>
                navigation.navigate('AccountDetail', { account: item })
              }
            />
          )}
        />
      </View>
    </ScrollView>
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
