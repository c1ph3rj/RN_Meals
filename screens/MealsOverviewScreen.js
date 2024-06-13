import { View, StyleSheet, Text, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import { MealItem } from "../components/MealItem";
import { useLayoutEffect } from "react";
import { AppScreens } from "../utils/AppScreens";

export const MealsOverviewScreen = ({ route, navigation }) => {
    const categoryID = route.params.categoryID;

    const mealsOfTheCategory = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryID) >= 0)

    const currentCategory = CATEGORIES.find((eachCategory)=> eachCategory.id === categoryID);

    useLayoutEffect(()=>{
      if(currentCategory != null) {
        const categoryTitle = currentCategory.title;
        navigation.setOptions({
          title: categoryTitle,
        });
      }
    }, [currentCategory, navigation])

    const onPressMealItemHandler = (id) => {
      navigation.navigate(AppScreens.MealDetailsScreen, {mealId: id})
    }
    
  return (
    <View>
        <FlatList  data={mealsOfTheCategory} renderItem={(mealItemData) => {
            const mealItem = mealItemData.item;
            return <MealItem item={mealItem} onPress={onPressMealItemHandler.bind(this, mealItem.id)}/>
        }} keyExtractor={(mealItem) => mealItem.id}/>
    </View>
  );
};

const styles = StyleSheet.create({
});
