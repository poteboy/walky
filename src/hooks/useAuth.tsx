import React, {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const useAuth = () => {
  const [authorized, setAuthorized] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [userUid, setUserUid] = useState<string | null>(null);

  auth().onAuthStateChanged(authState => {
    if (authState?.uid) {
      setAuthorized(true);
      setUserUid(authState?.uid);
      setAuthLoading(false);
    } else {
      setAuthorized(false);
      setAuthLoading(false);
    }
  });

  return {authorized, authLoading, setAuthorized, userUid, setUserUid};
};
