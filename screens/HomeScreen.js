import React , {Component} from 'react';
import { StyleSheet, Text, View , SafeAreaView , Platform , StatusBar,TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component
{
    render()
    {
        return(
            <View style={styles.container}>
                 <ImageBackground
                style={styles.backgroundImage}
                source={require("../assets/stars.gif")}
                >
                    
               
                <SafeAreaView style={styles.anroidSafeArea}>
                <Image
                    style={{width : 200,height:200,marginLeft:700}}
                    source={require("../assets/rocket.gif")}
                    />
<View>
                
                    <View style={styles.title_bar}>
                <Text style={styles.title_text}>
                Stellar App
                </Text>
                </View>
               
                </View>

                <TouchableOpacity style={styles.button_style} onPress={()=>{
                    this.props.navigation.navigate("SpaceCraft")
                }}>
                    <Text style={styles.button_text}>
                       Space Craft
                    </Text>
                    <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        1
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/space_crafts.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity  style={styles.button_style} onPress={()=>{
                    this.props.navigation.navigate("StarMap")
                }}>
                    <Text style={styles.button_text}>
                    Star Map
                    </Text>
                    <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        2
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/star_map.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity  style={styles.button_style} onPress={()=>{
                    this.props.navigation.navigate("DailyPic")
                }}>
                    <Text style={styles.button_text}>
                    Daily Pictures
                    </Text>
                    <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        3
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/daily_pictures.png")}
                    />
                </TouchableOpacity>
                
              </SafeAreaView>
              </ImageBackground>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    anroidSafeArea :{
        marginTop : Platform.OS === "android"?StatusBar.currentHeight:0
    },
    title_bar:{
        flex : 0.15,
        justifyContent:"center",
        alignItems:"center"
    },
    title_text:{
       fontSize:50,
       fontWeight:"bold",
       color:"white",
       
    },
   button_text:{
       fontSize:30,
       fontWeight:"bold",
       color:"yellow",
       //marginTop:75,
       //paddingLeft:30
   },
   button_style:{
       //flex:0.25,
       width:300,
       height:90,
       borderRadius:30,
       backgroundColor:"green",
       alignItems:"center",
       justifyContent:"center",
       alignSelf:"center",
       alignContent:"center",
       marginTop:50,
     
   },
   knowMore: {
    //paddingLeft: 30,
    color: "red",
    fontSize: 15
},
bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 20)",
    fontSize: 100,
    right: 300,
    bottom: -10,
    zIndex: -1
},
iconImage: {
    position: "absolute",
    height: 100,
    width: 100,
    resizeMode: "contain",
    right: -100,
    top: -10
},
backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
},
})