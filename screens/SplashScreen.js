import LottieView from "lottie-react-native";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { useRef } from "react";
import { AppFonts } from "../utils/AppFonts";
import { useFonts } from "expo-font";
import { AppScreens } from "../utils/AppScreens";
import { AppColors } from "../utils/AppColors";

export const SplashScreen = ({navigation}) => {

  const [isFontLoaded, fontLoadError] = useFonts({
    [AppFonts.MONTSERRAT_BLACK]: require("../assets/fonts/Montserrat-Black.ttf"),
    [AppFonts.MONTSERRAT_BLACK_ITALIC]: require("../assets/fonts/Montserrat-BlackItalic.ttf"),
    [AppFonts.MONTSERRAT_BOLD]: require("../assets/fonts/Montserrat-Bold.ttf"),
    [AppFonts.MONTSERRAT_BOLD_ITALIC]: require("../assets/fonts/Montserrat-BoldItalic.ttf"),
    [AppFonts.MONTSERRAT_EXTRA_BOLD]: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    [AppFonts.MONTSERRAT_EXTRA_BOLD_ITALIC]: require("../assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
    [AppFonts.MONTSERRAT_EXTRA_LIGHT]: require("../assets/fonts/Montserrat-ExtraLight.ttf"),
    [AppFonts.MONTSERRAT_EXTRA_LIGHT_ITALIC]: require("../assets/fonts/Montserrat-ExtraLightItalic.ttf"),
    [AppFonts.MONTSERRAT_ITALIC]: require("../assets/fonts/Montserrat-Italic.ttf"),
    [AppFonts.MONTSERRAT_LIGHT]: require("../assets/fonts/Montserrat-Light.ttf"),
    [AppFonts.MONTSERRAT_LIGHT_ITALIC]: require("../assets/fonts/Montserrat-LightItalic.ttf"),
    [AppFonts.MONTSERRAT_MEDIUM]: require("../assets/fonts/Montserrat-Medium.ttf"),
    [AppFonts.MONTSERRAT_MEDIUM_ITALIC]: require("../assets/fonts/Montserrat-MediumItalic.ttf"),
    [AppFonts.MONTSERRAT_REGULAR]: require("../assets/fonts/Montserrat-Regular.ttf"),
    [AppFonts.MONTSERRAT_SEMI_BOLD]: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    [AppFonts.MONTSERRAT_SEMI_BOLD_ITALIC]: require("../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
    [AppFonts.MONTSERRAT_THIN]: require("../assets/fonts/Montserrat-Thin.ttf"),
    [AppFonts.MONTSERRAT_THIN_ITALIC]: require("../assets/fonts/Montserrat-ThinItalic.ttf"),
  });

  if (isFontLoaded || fontLoadError) {
    new Promise((_) => {
      setTimeout(()=>{
        navigation.replace(AppScreens.HomeScreen);
      }, 2000);
    })
  }

    const animation = useRef();
  return (
    <View style={styles.rootContainer}> 
        <View  style={styles.animationContainer}>
        <LottieView
      autoPlay
      ref={animation}
      style={{
        width: 250,
        height: 250,
        borderRadius: 360,
        backgroundColor: "#eee",
      }}
      source={require("../assets/images/splash_screen_animation_1.json")}
    />
        </View>
    <Text style={styles.splashText}>Meals</Text>
    <StatusBar backgroundColor={AppColors.color1} style="light"/>
    </View>
  );
};

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },

      splashText: {
        fontWeight: "bold",
        fontSize: 50,
        color: "white",
        margin: 16,
      },

      animationContainer: {
        borderRadius: 360,
        overflow: 'hidden'
      }
});
