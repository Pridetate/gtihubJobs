import React from 'react';
import { Linking } from 'react-native';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity,Dimensions,ScrollView } from 'react-native';
import ReactMarkdown from 'react-markdown'
import Markdown from 'react-native-markdown-package'
import ReactMarkdownWithHtml from 'react-markdown/with-html'
import HTML from 'react-native-render-html'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const ItemScreen = ({route}) => {
    const {item} = route.params
    const {width,height} = Dimensions.get('window')

    // const tagRemover = (data)=>{
    //     const regex = /(<([^>]+)>)/ig
    //    return data.description.replace(/(<([^>]+)>)/ig, '')
    // }


    return (
        <SafeAreaProvider>
        <ScrollView style = {{backgroundColor: '#66ccff'}}>
        <View style = {[styles.itemContainer,{width: 0.9 * width , marginLeft: 0.05 * width}]}>
            <Text style = {styles.title}>{item.title}</Text>
            <Text style = {styles.company}>COMPANY: {item.company} </Text>
            <Text style = {styles.company}>{item.type} </Text>
            <Text style = {styles.company}>Located in {item.location} </Text>
            <Text style = {styles.company}>Time posted: {item.created_at} </Text>
            <ScrollView style={{ flex: 1 }}>
                <HTML source={{ html: item.description }} />
            </ScrollView>
            <ScrollView style={{ flex: 1 }}>
                <HTML source={{ html: item.how_to_apply}} />
            </ScrollView>            
                {item.company_logo && <Image 
                                            style ={styles.logo}  
                                            source = {{uri :item.company_logo}}  
                                        />} 
        </View>
        </ScrollView>
        </SafeAreaProvider>
        
    )
}

export default ItemScreen


const styles = StyleSheet.create({
    itemContainer:{
        paddingTop: 10,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:5,
        borderStyle: 'solid',
        borderColor:'blue',
        fontWeight: 'bold',
        fontSize: 20
          
    },
    title :{
        fontWeight: 'bold',
        fontSize: 20
      },
      company :{
 
        fontSize: 15
      },
    logo:{
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain'
      }
})
