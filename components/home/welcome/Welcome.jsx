import {React,useState} from 'react'
import { View, Text,TextInput,TouchableOpacity,Image,FlatList } from 'react-native'
import { router, useRouter } from 'expo-router'
import styles from './welcome.style'
import{icons,SIZES} from '../../../constants'

const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const jobTypes = ["Full Time","Part Time","Contractor"]
  const [activeJobType,setActiveJobType]=useState("Full Time")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome</Text>
        <Text style={styles.welcomeMessage}>Find The best job for you !</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={(text)=>{setSearchTerm(text)}}
          placeholder="what are you looking for ?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
          source={icons.search}
          style={styles.searchBtnImage}
          resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes}
        renderItem={({item})=>(
          <TouchableOpacity style={styles.tab(activeJobType,item)}
          onPress={()=>{
            setActiveJobType(item)
            router.push(`search/${item}`)
          }}
          >
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        >

        </FlatList>
      </View>
    </View>
  )
}

export default Welcome