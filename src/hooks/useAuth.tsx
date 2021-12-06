import React, {useState, useEffect} from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const useAuth = () => {

    const [authorized, setAuthorized] = useState(false)
    const [authLoading, setAuthLoading] = useState(false)


    return {authorized , authLoading, setAuthorized}
}