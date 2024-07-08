
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCBFq8cvJtzUkGrnmJdgCH7qEWDafxGtQ4",
    authDomain: "itzmylink-nextjs1114.firebaseapp.com",
    projectId: "itzmylink-nextjs1114",
    storageBucket: "itzmylink-nextjs1114.appspot.com",
    messagingSenderId: "119221275434",
    appId: "1:119221275434:web:ea1d1ba87af791c997ac53"
    };
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    export{ storage };