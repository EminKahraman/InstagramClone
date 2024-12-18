import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileImageBottomSheet from "../components/BottomSheets/ProfileImage";
import { useSelector } from "react-redux";

const CompleteProfile = ({ navigation }) => {
    const { firstName, bio, avatar, profileImageUrl } = useSelector(state => state.auth.user)
    const { card } = useSelector(state => state.profile)

    const profileImageBottomSheetReference = React.useRef(null);
    const handleProfileImagePress = () => {
        profileImageBottomSheetReference.current?.present();
    };

    const renderItem = ({ item }) => {
        const handlePress = () => {
            switch (item.key) {
                case 'addname':
                    navigation.navigate('ProfileEdit');
                    break;
                case 'addavatar':
                    handleProfileImagePress();
                    break;
                case 'addbio':
                    navigation.navigate('BioEdit');
                    break;
                case 'addpeople':
                    navigation.navigate('FollowDetail', { tabToOpen: 'Follow' });
                    break;
                default:
                    break;
            }
        };

        const isActive = (item.key === 'addname' && firstName) ||
            (item.key === 'addavatar' && avatar) ||
            (item.key === 'addbio' && bio) ||
            (item.key === 'addpeople' && profileImageUrl);

        return (
            <View style={styles.cardContainer}>
                <View style={[styles.iconBorder, { borderColor: isActive ? "black" : styles.iconBorder.borderColor }]}>
                    <Ionicons
                        name={item?.icon}
                        size={25}
                        color={isActive ? "black" : "#bebebe"}
                    />
                </View>
                <Text style={styles.header}>{item?.title}</Text>
                <Text style={styles.text}>{item?.subtitle}</Text>
                <TouchableOpacity style={[styles.button, { backgroundColor: isActive ? "#eee9e9" : styles.button.backgroundColor }]}
                    onPress={handlePress}>
                    <Text style={[styles.buttonText, { color: isActive ? "black" : styles.buttonText.color }]}>
                        {isActive ? item.inactiveButtonTitle : item.activeButtonTitle}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const sortedData = [...card].sort((a, b) => {
        const isActiveA = (a.key === 'addname' && firstName) ||
            (a.key === 'addavatar' && avatar) ||
            (a.key === 'addbio' && bio) ||
            (a.key === 'addpeople' && profileImageUrl);
    
        const isActiveB = (b.key === 'addname' && firstName) ||
            (b.key === 'addavatar' && avatar) ||
            (b.key === 'addbio' && bio) ||
            (b.key === 'addpeople' && profileImageUrl);
    
        // `isActive` false olanları önce koy
        return isActiveA === isActiveB ? 0 : isActiveA ? 1 : -1;
    });

    return (
        <>
            <FlatList
                data={sortedData}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false} />
            <ProfileImageBottomSheet ref={profileImageBottomSheetReference} />
        </>

    )
}

export default CompleteProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 30,
    },
    cardContainer: {
        borderWidth: 0.2,
        width: 220,
        height: 200,
        marginHorizontal: 5,
        paddingTop: 25,
        alignItems: "center",
        borderRadius: 5,
        borderColor: "#bebebe"
    },
    iconBorder: {
        borderWidth: 1.2,
        borderRadius: 100,
        borderColor: "#bebebe",
        padding: 10,
    },
    header: {
        fontWeight: "bold",
        marginTop: 15,
        textAlign: "center"
    },
    text: {
        flex: 1,
        fontSize: 12,
        marginTop: 2,
        textAlign: "center",
        color: "#696969",
        fontWeight: "500"
    },
    button: {
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 7,
        backgroundColor: "#1c86ee"
    },
    buttonText: {
        color: "white",
        fontWeight: "600"
    }
})