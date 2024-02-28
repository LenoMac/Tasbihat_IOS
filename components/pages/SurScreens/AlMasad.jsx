import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ
مَا أَغْنَى عَنْهُ مَالُهُ وَمَا كَسَبَ
سَيَصْلَى نَارًا ذَاتَ لَهَبٍ
وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ
فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). Таббат йадаааа 'Абии Лаҳаби у-уа табб
(2). Маа 'ағнаа ъанҳу маалуҳуу уа маа касаб
(3). Са-йаслаа Наарон-заата лаҳаб
(4). Уамро-'атуҳуу хаммаалатал-хатоб
(5). Фии жиидиҳаа хаблум-мим-масад`;

const meaningText = `(1). Абу Лахабдын эки колу куурап калсын! Ал куурады
(2). Ага анын байлыгы да, кесиби да эч жардам кыла алган жок
(3). Ал алоологон отто азапталат
(4). Отун көтөргөн айалы да
(5). Анын мойнунда эшилген жиби (бар)`;

export default function AlMasad() {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
            <SurSample
              title="Ал-Масад"
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
