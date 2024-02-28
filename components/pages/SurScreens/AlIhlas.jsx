import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
قُلْ هُوَ اللَّهُ أَحَدٌ
اللَّهُ الصَّمَدُ
لَمْ يَلِدْ وَلَمْ يُولَدْ
وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Қуль ҳу-уа-ЛЛооҳу 'Ахад
(2). 'АЛЛООҳус-Сомад
(3). Лам йалид, уа лам йуулад
(4). Уа лам йакул-ла-Ҳуу куфу-уан 'ахад`;

const meaningText = `Ырайымдуу Мээримдүү Аллахтын аты менен (баштаймын)
(1). Айткын: Аллах Жалгыз!
(2). Аллах эч кимге муктаж эмес!
(3). (Ал) төрөбөгөн жана төрөлбөгөн
(4). Ага эч ким теңдеш эмес`;

export default function AlIhlas() {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
            <SurSample
              title="Ал-Ихлас"
              arabicText={arabicText}
              rusText={rusText}
              meaningText={meaningText}
            />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
    paddingBottom: 40
  },
  container: {
    paddingHorizontal: 12,
  },
});
