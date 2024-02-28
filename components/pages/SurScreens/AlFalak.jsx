import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
مِن شَرِّ مَا خَلَقَ
وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ
وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Қул 'а-ъуузу би-Роббил-Фалақ
(2). Мин-шарри маа холақ
(3). Уа мин-шарри ғоосикин 'изаа уақоб
(4). Уа мин-шаррин-Наффаасаати фил -ъуқод
(5). Уа мин-шарри хаасидин 'изаа хасад`;

const meaningText = `Ырайымдуу Мээримдүү Аллахтын аты менен (баштаймын)
(1). Айткын: "Сактанам таңдын Эгеси менен
(2). Ал жараткан нерселердин жамандыгынан,
(3). Караңгылык каптагандагы анын жамандыгынан,
(4). Түйүндөргө сыйкырлоочулардын кастыгынан,
(5). Көрө албастардын кызгангандагы жамандыгынан"`;

export default function AlFalak() {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
            <SurSample
              title="Ал-Фалак"
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
