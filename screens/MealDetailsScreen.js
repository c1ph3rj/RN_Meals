import { StyleSheet, View, Text, ScrollView, StatusBar } from "react-native";
import { MEALS } from "../data/dummy_data";
import { AppColors } from "../utils/AppColors";
import { AppFonts } from "../utils/AppFonts";
import { Image } from "expo-image";
import { ListItem } from "../components/ListItem";
import { MealInfoTile } from "../components/MealInfoTile";
import { IconBtn } from "../components/IconBtn";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites-reducers";
// import { FavoritesContext } from "../store/context/favorites-context";

export const MealDetailsScreen = ({ navigation, route }) => {
  // const favoriteMealsCntx = useContext(FavoritesContext);
  const favoriteMealItems = useSelector((state) => state.favoriteMealItemDetails.ids);
  const dispatcher = useDispatch();
  const mealId = route.params.mealId;
  const mealItem = MEALS.find((mealItem) => mealItem.id === mealId);

  const onPressFavoriteHandler = () => {
    if(favoriteMealItems.includes(mealId)) {
      dispatcher(removeFavorite({id: mealId}));
    } else {
      dispatcher(addFavorite({id: mealId}));
    }
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: "Meal Details",
      headerRight: () => <IconBtn onPressFavorite={onPressFavoriteHandler} name={favoriteMealItems.includes(mealId) ? 'star' : 'staro'} color={AppColors.color1} />
    });
  }, [navigation, onPressFavoriteHandler])

  
  return (
    <ScrollView style={styles.rootContainer}>
      <Text style={styles.mealTitle}>{mealItem.title}</Text>
      <View style={styles.mealImageContainer}>
        <Image style={styles.mealImage} source={mealItem.imageUrl} />
      </View>
      <View style={styles.mealInfoContainer}>
        <MealInfoTile infoTitle={"Duration"} value={mealItem.duration + "m"} valueColor={AppColors.color2} />
        <MealInfoTile infoTitle={"Complexity"} value={mealItem.complexity} valueColor={AppColors.color4} />
        <MealInfoTile infoTitle={"Affordability"} value={mealItem.affordability} valueColor={AppColors.color6} />
      </View>
      <Text style={styles.subTitle}>Ingredients :</Text>
      <View style={styles.ingredientsContainer}>
        {mealItem.ingredients.map((eachIngredients, index) => {
          return (
            <ListItem key={index} index={index} itemText={eachIngredients} />
          );
        })}
      </View>
      <Text style={[styles.subTitle, {marginTop: 10}]}>Steps :</Text>
      <View style={styles.stepsContainer}>
        {mealItem.steps.map((eachStep, index) => {
          return (
            <ListItem key={index} index={index} itemText={eachStep} />
          );
        })}
      </View>
      <StatusBar style="dark" backgroundColor="white" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  subTitle: {
    fontSize: 20,
    fontFamily: AppFonts.MONTSERRAT_BOLD,
    color: AppColors.color7,
    marginHorizontal: 14,
  },

  mealTitle: {
    fontSize: 24,
    color: AppColors.color3,
    fontFamily: AppFonts.MONTSERRAT_EXTRA_BOLD,
    margin: 14,
  },

  mealImage: {
    height: 250,
    width: "100%",
  },

  mealImageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 12,
  },

  mealInfoContainer: {
    margin: 16,
    flexDirection: "row",
  },

  ingredientsContainer: {
    marginVertical: 5,
  },

  stepsContainer: {
    marginTop: 5, 
    marginBottom: 20,
  }
});
