import React from "react";
import { View, StyleSheet } from "react-native";

export default function ProgressBar({ progress }) {
  const barWidth = 230;
  const progressWidth = (progress / 100) * barWidth;

  return (
    <View style={styles.container}>
      <View style={styles.backgroundBar}>
        <View style={[styles.progressBar, { width: progressWidth }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 7,
  },
  backgroundBar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    borderRadius: 3.5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3478F6',
    borderRadius: 3.5,
  },
});