import { createSlice } from '@reduxjs/toolkit';

const dummyCard = [
    {
        id: 1,
        title: "Adını Ekle",
        activeButtonTitle: 'Ad Ekle',
        inactiveButtonTitle: 'Adı Düzenle',
        subtitle: `Arkadaşlarının seni tanıyabilmesi \n için adını ve soyadını ekle.`,
        icon: 'person-outline',
        key: 'addname'
    },
    {
        id: 2,
        title: "Profil Fotoğrafı Ekle",
        activeButtonTitle: 'Fotoğraf Ekle',
        inactiveButtonTitle: 'Fotoğrafı Değiştir',
        subtitle: `Instagram'da seni temsil edecek \n bir profil resmi seç.`,
        icon: 'person-circle-outline',
        key: 'addavatar'
    },
    {
        id: 3,
        title: "Biyografi Ekle",
        activeButtonTitle: 'Biyografi Ekle',
        inactiveButtonTitle: 'Biyografiyi Düzenle',
        subtitle: `Takipçilerine biraz kendinden \n bahset.`,
        icon: 'chatbubble-outline',
        key: 'addbio'
    },
    {
        id: 4,
        title: `Takip Edebileceğin İnsanlar \n Bul`,
        activeButtonTitle: 'Kişi Bul',
        inactiveButtonTitle: 'Daha Fazla Bul',
        subtitle: `İlgini çeken kişileri ve ilgi \n alanlarını takip et.`,
        icon: 'people-outline',
        key: 'addpeople'
    },
]

const initialState = {
    card: dummyCard
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }

})


export const { } = profileSlice.actions;
export default profileSlice.reducer;