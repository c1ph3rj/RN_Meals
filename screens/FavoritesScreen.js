import { useContext, useRef, useState, useEffect, useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy_data";
import { MealItem } from "../components/MealItem";
import { AppScreens } from "../utils/AppScreens";
import LottieView from "lottie-react-native";
import { AppFonts } from "../utils/AppFonts";
import { AppColors } from "../utils/AppColors";

export const FavoritesScreen = ({ navigation }) => {
  const favoriteMealsCntx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((eachMeal) =>
    favoriteMealsCntx.ids.includes(eachMeal.id)
  );

  useLayoutEffect(()=>{
    navigation.setOptions({
        
    })
  })
  
  const animation = useRef();

  if (favoriteMeals.length <= 0) {
    return (
      <View style={styles.centerContainer}>
        <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 250,
            height: 250,
            borderRadius: 360,
          }}
          source={require("../assets/images/empty_animation.json")}
        />
        </View>
        <Text style={styles.noFavoritesText}>You don't have any favorites yet. Add some items to see them here!</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={favoriteMeals}
        renderItem={(itemData) => {
          eachMealItem = itemData.item;
          return (
            <MealItem
              key={eachMealItem.id}
              item={eachMealItem}
              onPress={() => {
                navigation.navigate(AppScreens.MealDetailsScreen, {
                  mealId: eachMealItem.id,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    animationContainer: {
        borderRadius: 360,
        backgroundColor: AppColors.color9,
        overflow: "hidden",
        padding: 16,
    },

    noFavoritesText: {
        fontFamily: AppFonts.MONTSERRAT_EXTRA_BOLD,
        fontSize: 22,
        margin: 20,
        textAlign: "center",
        color: AppColors.color8,
    }
});
