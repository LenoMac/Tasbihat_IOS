import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import SurButton from "../../atoms/buttons/surs/SurButton";
import { useLanguageState } from "../../../states/language/useLanguageState";
const ListOfSur = [
  {
    titleRus: "Сура аль-Фатиха",
    titleKg: "Фатиха сүрөсү",
    name: "al-Fatiha",
    number: 1,
  },
  {
    titleRus: "Сура аль-Аср",
    titleKg: "Аср сүрөсү",
    name: "al-Asr",
    number: 2,
  },
  {
    titleRus: "Сура аль-Хумаза",
    titleKg: "Хумаза сүрөсү",
    name: "al-Humaza",
    number: 3,
  },
  {
    titleRus: "Сура аль-Филь",
    titleKg: "Филь сүрөсү",
    name: "al-Fil",
    number: 4,
  },
  {
    titleRus: "Сура Курайш",
    titleKg: "Курайш сүрөсү",
    name: "Kuraysh",
    number: 5,
  },
  {
    titleRus: "Сура Аль-Маун",
    titleKg: "Маун сүрөсү",
    name: "al-Maun",
    number: 6,
  },
  {
    titleRus: "Сура аль-Каусар",
    titleKg: "Каусар сүрөсү",
    name: "al-Kavsar",
    number: 7,
  },
  {
    titleRus: "Сура аль-Кафирун",
    titleKg: "Кафирун сүрөсү",
    name: "al-Kafirun",
    number: 8,
  },
  {
    titleRus: "Сура ан-Наср",
    titleKg: "Наср сүрөсү",
    name: "an-Nasr",
    number: 9,
  },
  {
    titleRus: "Сура аль-Масад",
    titleKg: "Масад сүрөсү",
    name: "al-Masad",
    number: 10,
  },
  {
    titleRus: "Сура аль-Ихлас",
    titleKg: "Ихлас сүрөсү",
    name: "al-Ihlas",
    number: 11,
  },
  {
    titleRus: "Сура аль-Фалак",
    titleKg: "Фалак сүрөсү",
    name: "al-Falak",
    number: 12,
  },
  {
    titleRus: "Сура ан-Нас",
    titleKg: "Нас сүрөсү",
    name: "an-Nas",
    number: 13,
  },
];
export const Sur = () => {
  const { lang } = useLanguageState();
  return (
    <View style={styles.sur}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.btn_list}>
            {ListOfSur.map((item, index) => {
              return (
                <SurButton
                  title={lang === "ru" ? item.titleRus : item.titleKg}
                  number={item.number}
                  name={item.name}
                  key={index}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sur: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
  },
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    paddingBottom: 40
  },
  btn_list: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
});
