import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { db } from 'firebase-config'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
    query,
    getDocs,
    collection,
    where,
    addDoc
} from 'firebase/firestore'

import { useAuth } from 'hooks/use-auth';
import {removeUser} from 'store/slices/userSlice'

// Helmet
import {Helmet} from 'react-helmet';
import log from "tailwindcss/lib/util/log";


const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let {isAuth, email, token, id} = useAuth();

    const [emailVal, setEmailVal] = useState(email)
    const [name, setName] = useState('')

    const auth = getAuth();

    const fetchUserName = async (user) => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
        }
    };

    onAuthStateChanged(auth, authUser => {
        if(!authUser) return navigate("/");

        if(!emailVal) setEmailVal(authUser.email)

        const q = query(collection(db, "users"), where("uid", "==", authUser?.uid));
        const doc = getDocs(q);
    })

    return (
        <div>
            <Helmet>
                <title> Gyumri Brand Shop | Profile </title>
            </Helmet>

            <div className="flex justify-center title-font sm:text-4xl text-3xl mb-4 font-medium bg-gradient-to-b from-purple-200 to-white h-[200px]">
                Welcome {emailVal} {name}
            </div>
        </div>
    )
};

export default Profile;