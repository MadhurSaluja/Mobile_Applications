import { StyleSheet, View, Text, Image } from 'react-native';

export default function MusicGrid() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.item}>
            <Image source={require('../assets/Music_Logo.png')} style={styles.icon} />
            <Text style={styles.label}>Hot Hits Canada</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('../assets/Music_Logo.png')} style={styles.icon} />
            <Text style={styles.label}>Hip Hop Central</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('../assets/Music_Logo.png')} style={styles.icon} />
            <Text style={styles.label}>All About Country</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('../assets/Music_Logo.png')} style={styles.icon} />
            <Text style={styles.label}>Daily Wellness</Text>
        </View>

      </View>
      <View style={styles.column}>
        <View style={styles.item}>
            <Image source={require('../assets/Music_Logo.png')} style={styles.icon} />
            <Text style={styles.label}>Pop Favourets</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('../assets/Music_Logo.png')} style={styles.icon} />
            <Text style={styles.label}>80's Hard Rock</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('../assets/Music_Logo.png')} style={styles.icon} />
            <Text style={styles.label}>Upbeat Mix</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('../assets/Music_Logo.png')} style={styles.icon} />
            <Text style={styles.label}>Release Radar</Text>
        </View>
        </View>

      </View>

  );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap:10,
    },
    item: {
        backgroundColor: 'gray',
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:5,
        flexDirection:'row',
        alignItems: 'center',
        gap:15,
   
    },
    icon: {
        width: 30,
        height: 30,
        
    },
    label: {
        color: 'white',
        fontSize: 14,
        
    },
    column:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 10,
        marginHorizontal: 5,
    
    },
});