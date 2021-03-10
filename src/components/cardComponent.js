import React from 'react'
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity ,Dimensions} from 'react-native';
import { Card} from 'react-native-elements'

const CardComponent = ({item,navigation,onPress}) => {
  const {width,height} = Dimensions.get('window')
    return (
        <TouchableOpacity onPress = {onPress}>
            <Card containerStyle = {styles.card} style = {[styles.card,{width: 0.9 * width , marginLeft: 0.05 * width}]}>
            <View style = {styles.allElementsContainer}>
                <Text style = {styles.title}>{item.title} </Text>
                <View style = {styles.logoContainer} >
                {!item.company_logo && <Image 
                                            style ={styles.logo}  
                                            source = {require('../../assets/placeholder.png')}  
                                        />}
                {item.company_logo && <Image 
                                            style ={styles.logo}  
                                            source = {{uri :item.company_logo}}  
                                        />}                 
                </View>
                
                <View sytle = {styles.textsElements}>
                    <Text style = {styles.company}>{item.company}</Text>
                    <Text style = {styles.company}>{new Date(item.created_at).toLocaleDateString()}</Text>
                    <Text style = {styles.company}>{item.type}</Text>
                    <Text style = {styles.company}>{item.location}</Text>
                </View>
                
                
            </View>
            </Card>
        </TouchableOpacity>
      
    )
}

export default CardComponent

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    card:{
        paddingBottom: 10,
        color: '#66ccff'
      },
    allElementsContainer:{
      paddingBottom:10
    },
    title :{
        fontWeight: 'bold',
        fontSize: 20
      },
    logoContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderWidth:5,
      borderStyle: 'solid',
      borderColor:'blue'  
    },
    logo:{
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      resizeMode: 'contain'
    },
    elementsWrapper:{
      justifyContent:'space-between',
      flexDirection: 'row'
    },
    
    textsElements:{
      borderWidth:10,
      borderStyle: 'solid',
      borderColor:'black',
      fontWeight: 'bold',
      fontSize: 20
    },

    company:{
      fontSize: 20,
  
    }
  });

