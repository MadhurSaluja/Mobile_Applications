import { StyleSheet, View, Text, Image } from 'react-native';

export default function Audiobooks() {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
        <View style={styles.card}>
          <Image source={require('../assets/Audiobook.jpg')} style={styles.image} />
          <Image source={require('../assets/Heart.png')} style={styles.heart} />
          <View style={styles.footBox}>
            <Text style={{color: 'lightgreen',fontSize: 12,}}>Included in Premium</Text>
            <Text style={{color: 'white',fontSize: 13,fontWeight: 'bold'}}> Mastering Conversation...</Text>
            <Text style={{color: 'lightgray', fontSize: 12}}>Helen Stone</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/Audiobook.jpg')} style={styles.image} />
          <Image source={require('../assets/Heart.png')} style={styles.heart} />
          <View style={styles.footBox}>
            <Text style={{color: 'lightgreen',fontSize: 12,}}>Included in Premium</Text>
            <Text style={{color: 'white',fontSize: 13,fontWeight: 'bold'}}> Control Your Mind and...</Text>
            <Text style={{color: 'lightgray', fontSize: 12}}>Eric Roberstson</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/Audiobook.jpg')} style={styles.image} />
          <Image source={require('../assets/Heart.png')} style={styles.heart} />
          <View style={styles.footBox}>
            <Text style={{color: 'lightgreen',fontSize: 12,}}>Included in Premium</Text>
            <Text style={{color: 'white',fontSize: 13,fontWeight: 'bold'}}> Ikigai: The Japenese Sec...</Text>
            <Text style={{color: 'lightgray', fontSize: 12}}>Hector Garcia</Text>
          </View>
        </View>
    </View>
    </View>

)};
const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        marginHorizontal: 20,

    },
    row:{
        flexDirection: 'row',
        gap: 15,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card:{
        width: 170,
        backgroundColor: 'white',
        borderRadius: 10,

    },
    image:{
        width: '100%',
        height: 120,

    },
    heart:{
        position: 'absolute',
        right: 5,
        top: 90,
        width: 30,
        height: 30,

    },
    footBox:{
        backgroundColor: 'gray',
        padding: 8,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },

});
