import { BackHandler, Platform, StyleSheet, Alert } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { AppColors } from "./utils/AppColors";
import * as React from "react";
import { SplashScreen } from "./screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppScreens } from "./utils/AppScreens";
import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";
import { MealDetailsScreen } from "./screens/MealDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoritesScreen } from "./screens/FavoritesScreen";
import { MaterialIcons } from "@expo/vector-icons";
// import { FavoritesContextProvider } from "./store/context/favorites-context";
import { Provider } from "react-redux";
import redux_store from "./store/redux/redux_store";
import { useNavigationState } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 22,
        },
        headerBackTitleVisible: false,
        headerTintColor: AppColors.color1,
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          minHeight: Platform.OS === "ios" ? 90 : 60,
        },
        tabBarActiveTintColor: AppColors.color1,
      }}
    >
      <Tab.Screen
        name={AppScreens.CategoriesScreen}
        component={CategoriesScreen}
        options={{
          title: "Categories",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcons name="category" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={AppScreens.FavoritesScreen}
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcons name="star" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  
  return (
    // <FavoritesContextProvider>
    // </FavoritesContextProvider>

    <Provider store={redux_store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              fontSize: 22,
            },
            headerBackTitleVisible: false,
            headerTintColor: AppColors.color1,
          }}
        >
          <Stack.Screen
            name={AppScreens.SplashScreen}
            component={SplashScreen}
            options={{
              headerShown: false,
              contentStyle: {
                backgroundColor: AppColors.color1,
              },
            }}
          />
          <Stack.Screen
            name={AppScreens.HomeScreen}
            component={BottomNavigation}
            options={{
              headerTitle: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={AppScreens.MealsOverviewScreen}
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name={AppScreens.MealDetailsScreen}
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.color1,
    flex: 1,
  },
});
