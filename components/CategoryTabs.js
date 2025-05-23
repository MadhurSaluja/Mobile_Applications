import { StyleSheet, View, Image, Text } from "react-native";

export default function CategoryTabs() {
    return (
      <View style= {styles.container}>
        <View style={styles.box}>
            <Image source={require('../assets/Apple_Logo.jpg')} style = {styles.icon} />
        </View>
        <View style={styles.box}>
            <Text style = {styles.boxText}>All</Text>
        </View>
        <View style={styles.box}>
            <Text style = {styles.boxText}>Music</Text>
        </View>
        <View style={styles.box}>
            <Text style = {styles.boxText}>Podcast</Text>
        </View>
        <View style={styles.box}>
            <Text style = {styles.boxText}>AudioBooks</Text>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 60,
      marginBottom: 10,
      gap: 10,
      
    },
    box: {
        backgroundColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    boxText: {
        color: 'white',
        fontSize: 15,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }
      
  });
  