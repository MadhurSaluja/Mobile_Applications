import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';


export default function RecentsSection() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.card}>
                <ImageBackground source={require('../assets/Music_Logo.png')} style={styles.image}>
                    <Text style={styles.heading}>Pop Mix</Text>
                </ImageBackground>
            <Text style={styles.foot}>Playlist         User 1</Text>
            </View>
            <View style={styles.card}>
                <ImageBackground source={require('../assets/Music_Logo.png')} style={styles.image}>
                    <Text style={styles.heading}>Hot Hits</Text>
                </ImageBackground>
            <Text style={styles.foot}>Playlist         User 1</Text>
            </View>
            <View style={styles.card}>
                <ImageBackground source={require('../assets/Music_Logo.png')} style={styles.image}>
                    <Text style={styles.heading}>Upbeat Mix</Text>
                </ImageBackground>
            <Text style={styles.foot}>Playlist         User 1</Text>
            
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.card}>
                <ImageBackground source={require('../assets/Music_Logo.png')} style={styles.image}>
                    <Text style={styles.heading}>Daily Wellness</Text>
                </ImageBackground>
            <Text style={styles.foot}>Playlist         User 1</Text>
            </View>
            <View style={styles.card}>
                <ImageBackground source={require('../assets/Music_Logo.png')} style={styles.image}>
                    <Text style={styles.heading}>HipHop Canada</Text>
                </ImageBackground>
            <Text style={styles.foot}>Playlist         User 1</Text> 
            </View>
            <View style={styles.card}>
                <ImageBackground source={require('../assets/Music_Logo.png')} style={styles.image}>
                    <Text style={styles.heading}>80s Hard Rock</Text>
                </ImageBackground>
            <Text style={styles.foot}>Playlist         User 1</Text>
            </View>
            
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        gap:15,
        marginTop:10,
        

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight:10,
        
        
    },
      
    card:{
        width:100,
        marginHorizontal:10,
        

    },
    image:{
        width: 120,
        height: 120,
     

    },
    heading: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: 'white',
        padding: 5,
        fontWeight: 'bold',
    },
      
    foot:{
        color: 'white',
        fontSize: 12,
        backgroundColor: 'gray',
        padding:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        width:120,
    },

});
