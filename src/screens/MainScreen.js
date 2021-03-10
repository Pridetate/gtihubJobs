import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';


import Jobs from '../components/Jobs'




const MainScreen = ({navigation}) => {
const [isLoading, setLoading] = useState(true);
const [isRefresh,setIsRefresh] = useState(false)
const [data,setData] = useState([])
const [markDown,setMarkDown] = useState(true)
const URL = 'https://jobs.github.com/positions.json'

useEffect(() => {
  fetch(URL,{markdown:true})
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, [isRefresh]);
    return  (

        <View style={{ flex: 1, padding: 24 , backgroundColor: '#66ccff'}}>
          {isLoading ? <ActivityIndicator size="small" color="#0000ff" /> : ( <Jobs data = {data} refreshList = {()=>{setIsRefresh(!isRefresh)}}/>)
          }
        </View>
      );
}

export default MainScreen

