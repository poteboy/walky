import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
function AuthTest() {
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  const onAuthStateChanged = async (user: FirebaseAuthTypes.User | null) => {
    if (user) {
      if (!user.emailVerified) {
        await user.sendEmailVerification();
      }
      setUser(user);
    }
  };

  const handleSignUp = async () => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        firestore().collection('users').doc(userCredential.user.uid).set({
          email,
          username,
          name,
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const handleLogin = async () => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('logged in');
      })
      .catch(error => {
        console.log(error.code);
      });
  };

  const handleLogout = async () => {
    await auth()
      .signOut()
      .then(() => {
        console.log('logged out');
      });
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <View>
      <TextInput
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        placeholder="email"
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        autoCapitalize="none"
        placeholder="password"
        secureTextEntry
      />
      <TextInput
        onChangeText={setUsername}
        value={username}
        autoCapitalize="none"
        placeholder="username"
      />
      <TextInput
        onChangeText={setName}
        value={name}
        autoCapitalize="none"
        placeholder="name"
      />
      {user && <Button onPress={handleLogout} title="logout" />}
      {!user && <Button onPress={handleSignUp} title="sign up" />}
      {!user && <Button onPress={handleLogin} title="login" />}
      <Text>user email: {user ? user?.email : 'login required'}</Text>
      <Text>userId: {user ? user?.uid : 'login required'}</Text>
      <Text>verified: {user && user?.emailVerified ? 'true' : 'false'}</Text>
    </View>
  );
}

export default AuthTest;
