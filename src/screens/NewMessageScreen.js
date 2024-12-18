import React from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import dummyData from "./dummyData";

const NewMessageScreen = () => {

    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 15,
                }}>
                <Image source={{ uri: item?.profileImage }} style={styles.profileImage} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontWeight: '500' }}>{item.fullName}</Text>
                    <Text style={{ color: '#696969', marginTop: 2 }}>{item.username}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 15 }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 20 }}>
                    <Text style={{ color: '#4f4f4f', fontWeight: '600' }}>Alıcılar:</Text>
                    <TextInput style={{ marginLeft: 30 }} placeholder="Ara" placeholderTextColor={"#4f4f4f"} ></TextInput>
                </View>

                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ backgroundColor: "#dcdcdc", borderRadius: 100, padding: 10 }}>
                        <Ionicons name="people-outline" size={25} />
                    </View>
                    <Text style={{ fontWeight: 500, marginLeft: 30 }}>Grup sohbeti oluştur</Text>
                </TouchableOpacity>

                <View>
                    <Text style={{ fontWeight: "500", marginVertical: 20 }}>Önerilen</Text>
                    <FlatList
                        renderItem={renderItem}
                        data={dummyData.users}
                        scrollEnabled={false}
                    />
                </View>

            </View>
        </View>
    )
}

export default NewMessageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 26,
    },

})