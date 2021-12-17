import React, {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {getToken} from '@src/apollo/getToken';

export const useAuth = () => {
  const [authorized, setAuthorized] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [userUid, setUserUid] = useState<string | null>(null);

  auth().onAuthStateChanged(authState => {
    const token = getToken();
    if (authState?.uid && token) {
      setAuthorized(true);
      setUserUid(authState?.uid);
    } else {
      setAuthorized(false);
    }
  });

  return {authorized, authLoading, setAuthorized, userUid, setUserUid};
};
