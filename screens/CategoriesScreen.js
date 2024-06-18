import { BackHandler, FlatList, StyleSheet, View, Alert } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import { CategoryTile } from "../components/CategoryTile";
import { AppScreens } from "../utils/AppScreens";
import { StatusBar } from "expo-status-bar";

export const CategoriesScreen = ({ navigation }) => {
  const onPressHandler = (id) => {
    navigation.navigate(AppScreens.MealsOverviewScreen, { categoryID: id });
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => {
          const eachCategory = itemData.item;
          return (
            <CategoryTile
              text={eachCategory.title}
              categoryColor={eachCategory.color}
              onPress={onPressHandler.bind(this, eachCategory.id)}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <StatusBar backgroundColor="white" style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
