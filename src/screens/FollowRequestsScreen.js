import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, ScrollView, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import dummyData from "./dummyData";

const FollowRequestsScreen = () => {

    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 15,
                    marginBottom: 15,
                }}>
                <Image source={{ uri: item?.profileImage }} style={styles.profileImage} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontWeight: '500' }}>{item.fullName}</Text>
                    <Text style={{ color: '#696969', fontSize: 12, marginTop: 5 }}>
                        Senin için öneriliyor
                    </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: 'white', fontWeight: 500 }}>Takip Et</Text>
                </TouchableOpacity>
                <Ionicons name="close-outline" size={15} style={{ marginLeft: 10 }} />
            </View>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={{ marginVertical: 50, alignItems: "center" }}>

                <View style={{ borderWidth: 2, padding: 15, borderRadius: 100 }}>
                    <Ionicons name={'person-add-outline'} size={55} />
                </View>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 15 }}>Takip İstekleri</Text>
                <Text style={{ textAlign: "center", color: '#696969', lineHeight: 20 }}>Seni takip etmek isteyen kişilerin istekleri burada {'\n'} gözükecek.</Text>
            </View>

            <Text style={styles.listHeader}>Senin için önerilenler</Text>
            <FlatList
                renderItem={renderItem}
                data={dummyData.users}
                scrollEnabled={false}
            />
        </ScrollView>

    )
}

export default FollowRequestsScreen

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
    button: {
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 10,
        marginLeft: 'auto',
        backgroundColor: '#1c86ee',
    },
    listHeader: {
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 20,
        fontWeight: '600',
        fontSize: 15,
    },
})