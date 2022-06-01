import { StyleSheet, Platform } from "react-native";
import { spacing } from "../theme/spacing";

export const SafeViewAndroid = StyleSheet.create({
    android: {
        flex:1,
        paddingTop: Platform.OS === "android" ? spacing[7] : 0,
    }
})