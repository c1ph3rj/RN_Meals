import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { AppColors } from "../utils/AppColors";
import { AppFonts } from "../utils/AppFonts";
import { useNavigation } from "@react-navigation/native";
import { MealInfoTile } from "./MealInfoTile";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const MealItem = ({ item, onPress }) => {
  const { title, imageUrl, complexity, affordability, duration } = item;
  return (
    <View style={styles.mealContainer}>
      <View style={styles.mealInnerContainer}>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            pressed && { backgroundColor: "#fff1f1", opacity: 0.65 },
          ]}
        >
          <Image
            source={imageUrl}
            style={styles.mealImg}
            placeholder={{ blurhash }}
            transition={1000}
          />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.details}>
            <MealInfoTile value={duration + "m"} valueColor={"black"} />
            <MealInfoTile value={complexity} valueColor={"black"} />
            <MealInfoTile value={affordability} valueColor={"black"} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealImg: {
    width: "100%",
    height: 200,
  },

  detailsSeperator: {
    color: AppColors.color3,
    fontWeight: "bold",
  },

  details: {
    flexDirection: "row",
    marginBottom: 18,
    marginHorizontal: 14,
    justifyContent: "space-evenly",
  },

  detailsItem: {
    fontSize: 16,
    padding: 8,
    fontFamily: AppFonts.MONTSERRAT_MEDIUM,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 16,
    color: AppColors.color2,
    fontFamily: AppFonts.MONTSERRAT_BOLD,
    textAlign: "center",
  },

  mealContainer: {
    margin: 16,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
    shadowRadius: 2,
  },

  mealInnerContainer: {
    overflow: "hidden",
    borderRadius: 10,
  },
});
