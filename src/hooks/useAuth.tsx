import React, {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const useAuth = () => {
  const [authorized, setAuthorized] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  auth().onAuthStateChanged(authState => {
    if (authState?.uid) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  });

  return {authorized, authLoading, setAuthorized};
};
