import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

let tokenId: string | null = null;

export const getToken = () => tokenId;

export const retrieveTokenId = async () => {
  const token = await auth().currentUser?.getIdToken();
  if (!token) return;
  tokenId = token;
};
