import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
إِذَا جَاء نَصْرُ اللَّهِ وَالْفَتْحُ
وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا
فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). 'Изаа жаааа-'а насруЛЛооҳи уалл Фатх
(2). Уа ро-'айтан-нааса йадхулууна фии Диини-ЛЛааҳи 'аф-уаажаа
(3). Фасаббих би-Хамди Роббика уастағфирҳ 'Инна-Ҳуу каана Тау-уаабаа`;

const meaningText = `(1). "Качан Аллахдан жардам жана жеңиш келген кезде,
(2). жана да Аллахтын динине топ-тобу менен кирип жаткан элдерди көргөнүңдө,
(3). Ошондо Эгеңди мактоо менен даңктагын жана Андан кечирим сура. Албетте Ал тооболорду кабыл кылуучу!"`;

export default function AnNasr() {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
            <SurSample
              title="Ан-Наср"
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