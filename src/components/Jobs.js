import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import CardComponent from './cardComponent'
import { useNavigation } from '@react-navigation/native';

const Jobs = ({data,refreshList}) => {
    
    const navigation = useNavigation(); 

    return (
        <View >
          <TouchableOpacity onPress = {refreshList}>
          <Text style={{ fontSize: 18, color: 'blue', textAlign: 'center', paddingBottom: 10}}>Click to refresh list:</Text>
          </TouchableOpacity>
          
          
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (

                <CardComponent item = {item} onPress = {()=>{navigation.navigate('Full Job Description',{item})}}
                />
            )
        }
          />
          
        </View>
      
    )
}

export default Jobs

const styles = StyleSheet.create({


  });
