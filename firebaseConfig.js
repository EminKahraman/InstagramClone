import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAZKTOiBh6cn8gkRUF2lodxVVjDeVs10Mc",
  authDomain: "instagramclone-26003.firebaseapp.com",
  databaseURL: "https://instagramclone-26003-default-rtdb.firebaseio.com",
  projectId: "instagramclone-26003",
  storageBucket: "instagramclone-26003.appspot.com",
  messagingSenderId: "839076521660",
  appId: "1:839076521660:web:943d84bd9934a6b3a292b9"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getDatabase(app);
