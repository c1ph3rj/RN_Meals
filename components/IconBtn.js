import { StyleSheet, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


export const IconBtn = ({name, size, color, onPressFavorite}) => {
    color = color ? color : "white";
    size = size ? size : 24;
  return <Pressable onPress={onPressFavorite} style={({pressed}) => pressed && styles.pressedState}>
    <AntDesign name={name} size={size} color={color} />
  </Pressable>;
};

const styles = StyleSheet.create({
    pressedState: {
        opacity: .65,
    }
});
