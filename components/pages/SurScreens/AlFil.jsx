import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ
أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ
وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ
تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ
فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ`

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим
(1). 'Алам таро кайфа фа-ъала Роббука би-'Ас-хаабиль-ФИИЛ
(2). 'Алам йаж-ъал кайдаҳум фии тадлииль
(3). Уа 'арсала ъалайҳим тойрон 'абаабиил
(4). Тармииҳим-би-хижааротим-мин-сижжииль
(5). Фажа-ъалаҳум ка-ъасфим-ма'кууль`

const meaningText = `(1). Сенин Эгең пил ээлерин менен кылганын көрбөйсүңбү?
(2). Ал алардын арам ой-максаттарын ойрон кылбадыбы?
(3). Ал аларга тобу менен куштарды жөнөтпөдүбү?
(4). Ал куштар тигилердин үстүндө бышкан чопо таштарды ташташты
(5). Ошентип, аларды чайналган эгиндей кылып салды`

export default function AlFil() {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
            <SurSample
              title="Аль-Фиил"
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