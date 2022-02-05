import { Button, View } from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            onPress={() => navigation.navigate('Notifications')}
            title="Go to notifications"
          />
        </View>
      );
}
