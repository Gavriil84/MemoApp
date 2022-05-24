import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/AppBar';
import CircleButton from './src/components/CircleButton';
import MemoList from './src/components/MemoList';
import { string } from 'prop-types';


export default function App() {
  return (
    <View style={styles.container}>

      <AppBar />

      <MemoList />

      <CircleButton>+</CircleButton>

    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',

  },
});
