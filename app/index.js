import {useState} from "react";
import {View,ScrollView,SafeAreaView} from "react-native";
import {COLORS,icons,images,SIZES,theme} from "../constants"
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome
} from "../components"
import { Stack,useRouter } from "expo-router";
const Home = () => {
    const router = useRouter();
    const [searchTerm,setSearchTerm] = useState("");
    return (
        <SafeAreaView style ={{flex:1, backgroundColor:"#fff0b5"}}>
    
            <Stack.Screen
            options={{

                headerStyle:{backgroundColor:"#fff0b5"},
                headerShadowVisible:false,
                headerLeft:()=>(<ScreenHeaderBtn iconUrl = {icons.menu}  dimension="60%"/>),
                headerRight:()=>( <ScreenHeaderBtn iconUrl = {images.profile} dimension="100%"/>),
                headerTitle : ""
       
                      }}
            />
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={{
                    flex:1,
                    padding: SIZES.medium
                }}>

                <Welcome 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleClick={()=>{
                    if(searchTerm){
                        router.push(`search/${searchTerm}`)
                    }
                }}
                />
                <Popularjobs/>
                <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;