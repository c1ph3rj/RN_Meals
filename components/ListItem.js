import { Text, StyleSheet } from "react-native";
import { AppFonts } from "../utils/AppFonts";

export const ListItem = ({index, itemText}) => {
    return <Text style={styles.listItemText}>
    <Text
      style={[
        styles.listItemText,
        { fontFamily: AppFonts.MONTSERRAT_BOLD },
      ]}
    >
      {index + 1}.
    </Text>{" "}
    {itemText}
  </Text>;
}

const styles = StyleSheet.create({
    listItemText: {
        fontSize: 18,
        marginVertical: 2,
        fontFamily: AppFonts.MONTSERRAT_REGULAR,
        marginHorizontal: 25,
      },
})