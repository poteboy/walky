import React, {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const useAuth = () => {
  const [authorized, setAuthorized] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [idToken, setIdToken] = useState('');

  auth().onAuthStateChanged(authState => {
    if (authState?.uid) {
      authState.getIdToken().then(token => {
        setIdToken(token);
        setAuthorized(true);
      });
    } else {
      setAuthorized(false);
    }
  });

  return {authorized, authLoading, setAuthorized, idToken};
};
