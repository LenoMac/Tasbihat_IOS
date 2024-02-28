import React from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet
} from "react-native";
import Menu_buttons from "../../molecules/menu_buttons/Menu_buttons";
// // Импорт Лого и изображении
import Logo from "../../../assets/img/Logo.png";
import Language from "../../atoms/language/Language";

export const Menu = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container_row}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.title}>ТАСБИХАТ</Text>
        <Language />
        <Menu_buttons />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 12,
    backgroundColor: "#320548",
  },
  container_row: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 30,
    gap: 20,
  },
  logo: {
    alignSelf: "center",
  },
  title: {
    color: "yellow",
    fontSize: 23,
    textAlign: "center",
    fontFamily: "Bold",
  },
  loadPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#320548",
  },
});
