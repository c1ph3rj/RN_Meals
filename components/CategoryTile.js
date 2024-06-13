import { StyleSheet, View, Text, Pressable } from "react-native";
import { AppFonts } from "../utils/AppFonts";

export const CategoryTile = ({ text, categoryColor, onPress }) => {
  return (
    <View style={[styles.categoryTileContainer]}>
      <Pressable
        android_ripple={(color = "#ccc")}
        style={({ pressed }) => {
            return [
                styles.cateogryTile, {backgroundColor: categoryColor}, pressed && {opacity: .45}
            ]
        }}
        onPress={onPress}
      >
        <Text style={styles.categoryText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryTileContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 5,
    shadowColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    overflow: "hidden",
  },

  categoryText: {
    fontSize: 22,
    fontFamily: AppFonts.MONTSERRAT_BLACK,
    padding: 8,
    color: "white",
  },

  cateogryTile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
