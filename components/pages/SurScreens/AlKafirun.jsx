import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
قُلْ يَا أَيُّهَا الْكَافِرُونَ
لَا أَعْبُدُ مَا تَعْبُدُونَ
وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ
وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ
وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ
لَكُمْ دِينُكُمْ وَلِيَ دِينِ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим.
(1). Қул йаааа-'аййуҳал-КААФИРУУН
(2). Лаааа 'аъбуду маа таъбудуун
(3). Уа лааа 'антум ъаабидууна маааа 'аъбуд
(4). Уа лаааа 'ана ъаабидум-маа ъабаттум
(5). Уа лаааа 'антум ъаабидууна маааа 'аъбуд
(6). Лакум Диинукум уа лийа Диин`;

const meaningText = `(1). Айткын: "Эй, капырлар!
(2). Мен силер сыйынган нерселерге сыйынбаймын,
(3). Силер дагы мен сыйынган (Аллахка) сыйынбайсыңар,
(4). Дагы да - мен силер сыйынган нерселерге сыйынбаймын,
(5). жана да силер мен сыйынган (Аллахка) сыйынбайсыңар,
(6). Силердин диниңер - озүңөр үчүн, а менин диним - өзүм үчүн"`;

export default function AlKafirun() {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
            <SurSample
              title="Аль-Кафирун"
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
