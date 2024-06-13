import { View, Text, StyleSheet } from "react-native";
import { AppColors } from "../utils/AppColors";
import { AppFonts } from "../utils/AppFonts";

export const MealInfoTile = ({infoTitle, value, valueColor}) => {
  return (
    <View style={[styles.mealInfoContainer]}>
      {infoTitle && <Text style={styles.mealInfoText}>{infoTitle}</Text>}
      <Text style={[styles.mealInfoValueText, {color: valueColor}]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mealInfoContainer: {
    marginHorizontal: 4,
    backgroundColor: AppColors.color5,
    borderRadius: 10,
    padding: 10,
  },

  mealInfoText : {
    fontFamily: AppFonts.MONTSERRAT_MEDIUM,
    fontSize: 16,
  },

  mealInfoValueText: {
    fontSize: 18,
    fontFamily: AppFonts.MONTSERRAT_BOLD,
  }
});
