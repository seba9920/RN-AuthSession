import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button, View } from 'react-native';
import { styles } from '../App';

WebBrowser.maybeCompleteAuthSession();

export default function Login2({navigation}) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '1062738686275-bifds61mo9h44a3eb9qqjgo5smi0j6n5.apps.googleusercontent.com'
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      navigation.navigate("navegation", {auth: response.authentication})
      }
  }, [response]);

  return (
    <View style={styles.container}>
    <Button
      disabled={!request}
      title="Iniciar Sesion"
      onPress={() => {
        promptAsync();
        }}
    />
    </View>
  );
}