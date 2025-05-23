import { ScrollView , StyleSheet, Text, View } from 'react-native';
import CategoryTabs from './components/CategoryTabs';
import MusicGrid from './components/MusicGrid';
import RecentsSection from './components/RecentsSection';
import Audiobooks from './components/Audiobooks';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <CategoryTabs />
    <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
      <MusicGrid />
      <Text style={{ color: 'white', fontSize: 20, marginLeft: 10, marginTop: 20 , fontWeight: 'bold'}}>Recents</Text>
      <RecentsSection />
      <Text style={{ color: 'white', fontSize: 20, marginLeft: 10, marginTop: 20 , fontWeight: 'bold'}}>Audiobooks for you</Text>
      <Audiobooks /> 
    </ScrollView>
    </View>
  );
}


