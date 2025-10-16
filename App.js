import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>

      <View style={styles.container3}>
      <Image 
      source={require('./assets/emsi.png')}
        style={styles.logo}
        resizeMode="contain"
        />
     <Text style={styles.schoolName}>EMSI MAARIF</Text>
     </View>

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
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebe6e6ff',
    alignItems: 'center',
    justifyContent: 'center',
    
    height:300,
    
   
  },
  container2:{
    backgroundColor: '#ffffffff',
borderWidth: 2,
shadowColor: '#000',
borderRadius: 10, 
height :230,
width:390,
elevation: 10,
shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  container3:{
    alignItems: 'stretch',
    
    width:'90%',
    flexDirection:'row',
   margin:20,
  
  },
  logo:{
    width :180,
    height :50,
    
  },
  schoolName: {
    fontSize : 19,
    fontWeight :'bold',
    color :'#1f2937',
    marginTop : 10,
    letterSpacing : 1,
    flexDirection :'row',
    justifyContent : 'space-around',
    paddingLeft:20,
    
    
  },
  info :{
    alignItems:'left',
    gap : 8,
    marginLeft:40,
  },
  label :{
    fontSize:15,
    color : '#6b7280',
    fontWeight:'500',
  },
   value: { 
    fontSize: 16, 
    color: '#111827', 
    fontWeight: 'bold', 
  }, 
});
