import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export function ScreenA() {
  const navigation = useNavigation()

  const text = 'Evandro Luiz'

  function openScreen() {
    navigation.navigate('screenB', { name: text })
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
      <Button
        title="Ir para tela B"
        onPress={openScreen}
      />

    </View>
  );
}