import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ
فَذَلِكَ الَّذِي يَدُعُّ الْيَتِيمَ
وَلَا يَحُضُّ عَلَى طَعَامِ الْمِسْكِينِ
فَوَيْلٌ لِّلْمُصَلِّينَ
الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ
الَّذِينَ هُمْ يُرَاؤُونَ
وَيَمْنَعُونَ الْمَاعُونَ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). 'Аро-'айталлазии йуказзибу бид - Диин
(2). Фазааликал-лазии йадуъ-ъуль йатиим
(3). Уа лаа йахудду ъалаа то-ъаамил мискиин
(4). Фа-уайлул-лил-мусоллиин
(5). 'Аллзиина ҳум ъан-солаатиҳим сааҳуун
(6). 'Аллазиина ҳум йуроо-уун
(7). Уа йамна-ъуунал -МАА-ЪУУН`;

const meaningText = `(1). Динди жалганга чыгарганды сен көрдүңбү?
(2). Дал ошол жетимдерди кууган,
(3). Жана да ал жардыларды тамак берүүгө үндөбөгөн (үгүттөбөгөн) неме
(4). Азап (болсун) намаз(ды начар) окуучуларга
(5). Анткени алар намаздарын унутуп коюшкан
(6). (анан да) алар (намаздарын) эл көрсүнгө жасашат (окушат)
(7). Жана да алар үй шаймандарын (башкаларга) беришпейт`;

export default function AlMaun() {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
            <SurSample
              title="Аль-Маъуун"
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
