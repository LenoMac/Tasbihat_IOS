import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ
فَصَلِّ لِرَبِّكَ وَانْحَرْ
إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим.
(1). 'Иннаааа 'аътойнаакал-КАУСАР
(2). Фасолли ли-Роббика уанхар
(3). 'Инна шаани-'ака ҳу-уал-'абтар`;

const meaningText = `(1). Акыйкатта, Биз сага "Кавсарды" таттуу кылдык,
(2). Эми Эгеңе (сыйынып) намаз оку жана курбандык чал
(3). Ырасында, сени капаланткан - өзү шордуу`;

export default function AlKavsar() {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
            <SurSample
              title="Аль-Каусар"
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
