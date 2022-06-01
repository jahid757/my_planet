import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import PlanetHeader from "../components/planet-header";
import { SafeViewAndroid } from "../components/safe-area";
import Text from "../components/text/text";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const Details = ({ navigation, route }) => {
  const { name } = route.params.planet;

  const renderImage = () => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "venus":
        return <VenusSvg />;
      case "earth":
        return <EarthSvg />;
      case "mars":
        return <MarsSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "neptune":
        return <NeptuneSvg />;
    }
  };

  return (
    <SafeAreaView style={[SafeViewAndroid.android, styles.container]}>
      <PlanetHeader backButton={true} />
      <ScrollView>
        <View style={styles.imageView}>{renderImage()}</View>
        <View style={styles.detailsView}>
            <Text preset="h1" style={styles.name}>{name}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    padding: spacing[5],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsView:{
      marginTop:spacing[10],
      marginHorizontal:spacing[5],
      alignItems:"center",
  },
  name:{
    // textAlign:'center',
    textTransform:'uppercase',
  }
});

export default Details;
