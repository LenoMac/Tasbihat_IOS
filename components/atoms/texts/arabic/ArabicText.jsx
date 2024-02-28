import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ArabicText({ text }) {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 28,
    textAlign: "right",
    fontFamily: 'Medium',
    lineHeight: 40
  },
});