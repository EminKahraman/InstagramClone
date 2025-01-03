import { Image, Text, StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import Video from "react-native-video";
import ProgressBar from "./ProgressBar";

export function UploadingAndroid({ image, video, progress }) {
  // The component has the same logic. However, the blur effect works differently on Android.
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for Android
        },
      ]}
    >
      <View
        style={{
          width: "70%",
          backgroundColor: '#FFFFFF',
          borderRadius: 14,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingVertical: 10,
            rowGap: 12,
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
                borderRadius: 6,
              }}
            />
          )}
          {video && (
            <Video
              source={{
                uri: video,
              }}
              style={{ width: 200, height: 200 }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
            />
          )}
          <Text style={{ fontSize: 12 }}>Uploading...</Text>
          <ProgressBar progress={progress} />
          <View
            style={{
              height: 1,
              borderWidth: StyleSheet.hairlineWidth,
              width: "100%",
              borderColor: "#00000020",
            }}
          />
          <TouchableOpacity>
            <Text style={{ fontWeight: "500", color: "#3478F6", fontSize: 17 }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}