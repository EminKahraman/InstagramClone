import React from "react";
import { Switch, Text, TouchableOpacity, View, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setAccountPrivacy } from "../redux/authSlice";
import AccountPrivacy from "../components/BottomSheets/AccountPrivacy";

const AccountPrivacyScreen = () => {
    const dispatch = useDispatch();
    const { accountPrivacy } = useSelector(state => state.auth);

    const handlePrivacyChange = (value) => {
        handleAccountPrivacyPress()
    };

    const AccountPrivacyBottomSheetReference = React.useRef(null);
    const handleAccountPrivacyPress = () => {
        AccountPrivacyBottomSheetReference.current?.present();
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ marginHorizontal: 15 }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 20 }}>
                    <Text style={{ fontWeight: "500" }}>Gizli Hesap</Text>
                    <Switch
                        style={{ marginLeft: "auto" }}
                        value={accountPrivacy}
                        onValueChange={handlePrivacyChange}
                    />
                </View>
                <Text style={{ color: "#696969", marginBottom: 20, fontSize: 12, lineHeight: 15 }}>Hesabın herkese açık olduğunda, profilini ve gönderilerini Instagram hesapları olmasa bile Instagram'da veya Instagram dışında herkes görebilir.</Text>
                <Text style={{ color: "#696969", fontSize: 12, lineHeight: 15 }}>Hesabın gizli olduğunda, konu etiketi ve konum sayfalarındaki fotoğrafın veya videoların, takipçilerin ve takip listelerin de dahil olmak üzere paylaştığın şeyleri sadece onayladığın takipçiler görebilir.
                    <Text style={{ color: '#1c0f45', fontWeight: '500', fontSize: 12 }}> Daha fazla bilgi al</Text>
                </Text>
            </View>
            <AccountPrivacy ref={AccountPrivacyBottomSheetReference} />
        </View>
    )
}

export default AccountPrivacyScreen