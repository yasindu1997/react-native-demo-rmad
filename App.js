import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./components/Header";
import { Button, TextInput } from 'react-native-paper';


function App() {

  const whenClick = () => {
    console.log("Hello RMAD Students");
  }

  return (
    <View>
      <Text style={{ color: 'red', marginTop: 20, marginBottom: 30, fontSize: 20 }}>
        Hello Yasindu
      </Text>

      <Text style={style.text}>
        Hello RMAD</Text>

      <Button style={{ width: 250 }} icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
        Press me
      </Button>

      <TextInput
        label="Email"
        value={""}
        mode="outlined"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        label="Password"
        value={""}
        mode="outlined"
        style={{ marginBottom: 10 }}

      />

      <TouchableOpacity style={style.btn}>
        <Text style={{ color: '#ffff', fontSize: 20 }}>Clik Me</Text>
      </TouchableOpacity>

      <Header name="Yasindu" />
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 25
  },
  btn: {
    width: 250,
    height: 50,
    backgroundColor: 'brown',
    marginBottom: 20,
    alignContent: 'center',
    alignItems: 'center'
  },
  btn2: {
    color: 'green',
    width: 50,
    marginBottom: 50
  }
})

export default App;