import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `سْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
لِإِيلَافِ قُرَيْشٍ
إِيلَافِهِمْ رِحْلَةَ الشِّتَاء وَالصَّيْفِ
فَلْيَعْبُدُوا رَبَّ هَذَا الْبَيْتِ
الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Ли-'йлаафи ҚУРОйШ
(2). 'Йлаафиҳим рихляташ-шитаааа-'и уас-сойф
(3). Фал-йаъбудуу Робба ҳаазаль-Байт
(4). 'Аллазииии 'ат-ъамаҳум-мин - жуу - ъи у-уа 'ааманаҳум - мин Хоуф`;

const meaningText = `(1). Курейштер көнүккөн нерселери үчүн,
(2). (б.а.) кышкы жана жайкы сапарга көнүккөндөрү үчун,
(3). Бул үйдүн Ээсине сыйынышсын!
(4). Ал ачкалыкта аларды тамактандырып, коркунучтан аларды аман сактаган`;

export default function Kuraysh() {
  const {lang} = useLanguageState()
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
            <SurSample
              title="Курайш"
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