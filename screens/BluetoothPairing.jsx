import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import { Image } from "react-native";

const BluetoothPairing = () => {

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo-velos.png")} style={styles.logo} />
      <Text>Bluetooth</Text>
      <Button title="Scan Devices" onPress={scanDevices} />
    </View>
  );
};

export default BluetoothPairing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A6E3EA",
  },
  logo: {
    width: 250,
    resizeMode: "contain",
  },
});
