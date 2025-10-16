import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={require('./assets/emsi.png')}
        style={styles.logo}
        resizeMode="contain"
        />
     <Text style={styles.schoolName}>EMSI MAARIF</Text>
     <View style={styles.info}>
         <Text style={styles.label}>NOM :
            <Text style={styles.value}> EL MAHI</Text>
        </Text>
 <Text style={styles.label}>PRENOM :
            <Text style={styles.value}> SAAD</Text>
        </Text>
         <Text style={styles.label}>ANNEE UNIVERSITAIRE :
            <Text style={styles.value}> 2025 / 2026</Text>
        </Text>


     </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width :200,
    height :200
  },
  schoolName: {
    fontSize : 22,
    fontWeight :'bold',
    color :'#1f2937',
    marginTop : 20,
    letterSpacing : 1,
    flexDirection :'row',
    justifyContent : 'space-around',

  },
  info :{
    alignItems:'center',
    gap : 8,
  },
  label :{
    fontSize:16,
    color : '#6b7280',
    fontWeight:'500',
  },
   value: { 
    fontSize: 17, 
    color: '#111827', 
    fontWeight: 'bold', 
  }, 
});
