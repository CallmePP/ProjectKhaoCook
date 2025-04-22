import { View, Text } from 'react-native'
import React, { use } from 'react'
import React, {useEffect, useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config'; // นำเข้า Firebase Authentication

export default function useAuth() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return unsubscribe; // ทำความสะอาดเมื่อคอมโพเนนต์ถูกทำลาย
},[] )
return { user };
}