import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
قُلْ أَعُوذُ بِرَبِّ النَّاسِ
مَلِكِ النَّاسِ
إِلَهِ النَّاسِ
مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
مِنَ الْجِنَّةِ وَ النَّاسِ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Қул а-ъуузу би-Роббин-наас
(2). Маликин-Наас
(3). 'Илааҳин-Наас
(4). Мин-шаррил-Уас-уаасил -хон-Наас
(5). 'Аллазии йу-уас-уису фии судуурин-Наас
(6). Минал-Жиннати уан-Наас`;

const meaningText = `Ырайымдуу Мээримдүү Аллахтын аты менен (баштаймын)
(1). Айткын: "Сактанам адамдардын Эгеси менен,
(2). (Ал) адамдардын падышасы,
(3). (Ал) адамдардын Кудайы
(4). Жашырынган азгыруучунун жамандыгынан,
(5). Ал адамдардын жүрөктөрдүн азгырат,
(6). (Алар) жиндер жана адамдардан (болот)"`;

export default function AnNas() {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
            <SurSample
              title="Ан-Наас"
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
