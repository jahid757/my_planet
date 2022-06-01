import React from "react";
import { StyleSheet, Text as RNText } from "react-native";
import { presets } from "./text.preset";

const Text = ({ children, preset = "default", style }) => {
  const styleText = StyleSheet.compose(presets[preset] ,style);
  return <RNText style={styleText}>{children}</RNText>;
};

export default Text;
