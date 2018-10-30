import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    Animated,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView
} from "react-native";

import * as Animatable from 'react-native-animatable';
import {Icon} from 'native-base';


const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginScreen extends Component {

    //Header config
    static navigationOptions = {
        header: null
    }

    componentWillMount(){

        this.loginHeight = new Animated.Value(150)

    }

    increaseHeightOfLogin = () => {
        
        this.refs.textInputMobile.focus();

        Animated.timing(this.loginHeight, {
            toValue: SCREEN_HEIGHT,
            duration: 500
        }).start()

    }

    decreaseHeightOfLogin = () => {

        Keyboard.dismiss()
        Animated.timing(this.loginHeight, {
            toValue: 150,
            duration: 500
        }).start()

    }

    //Content
    render() {

        const headerTextOpacity = this.loginHeight.interpolate({
            inputRange:[150,SCREEN_HEIGHT],
            outputRange:[1,0]
        })

        const marginTop = this.loginHeight.interpolate({
            inputRange:[150,SCREEN_HEIGHT],
            outputRange:[25,100]
        })

        const headerBackArrowOpacity = this.loginHeight.interpolate({
            inputRange:[150,SCREEN_HEIGHT],
            outputRange:[0,1]
        })



        return (
            <View style={{ flex: 1 }}>

                {/* BackArrow */}
                <Animated.View
                    style={{position: "absolute",
                            height:60, width:60,
                            top: 50,
                            left:25,
                            zIndex: 100,
                            opacity: headerBackArrowOpacity,
                            
                        }}>

                        <TouchableOpacity
                            onPress={() => this.decreaseHeightOfLogin()}>
                            <Icon name="md-arrow-back" style={{color: 'black'}} />
                        </TouchableOpacity>

                </Animated.View>

                <ImageBackground
                    source={require('../Assets/bg_img.png')}
                    style={{ flex: 1 }}
                >

                {/* Company Logo */}
                <View style = {{ 
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: "center" 
                }}>
                    <Animatable.View 
                        animation = "zoomIn"iterationCount={1}
                        style = {{
                        width: 110,
                        height: 110,
                        backgroundColor: 'white',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style = {{fontWeight: '600'}}>ISENÇÕES BR</Text>
                    </Animatable.View>
                </View>
                
                
                {/* Login Area */}

                <Animatable.View
                animation="slideInUp" iterationCount={1}>
                    
                    
                    <Animated.View style = {{
                        height: this.loginHeight,
                        backgroundColor: 'white'
                    }}>
                        
                        <Animated.View style={{
                            opacity: 1,
                            alignItems: 'flex-start',
                            paddingHorizontal: 25,
                            marginTop: marginTop // animated
                        }}

                        >
                            <Text  style={{ fontSize: 24}}>
                                Cadastro
                            </Text>
                        </Animated.View>
                        

                        <TouchableOpacity
                            onPress = {() => this.increaseHeightOfLogin()}>
                            <View style={{
                                    marginTop: 25, // animated
                                    paddingHorizontal: 25,
                                    flexDirection: 'row',
                                    justifyContent: "center",
                                    alignItems: "center"
 
                                }}>


                                <Image source={require('../Assets/br_flag.png')}
                                style={{
                                    height: 26,
                                    width: 26,
                                    resizeMode: "contain",
                                }}/>

                                <View pointerEvents="none"
                                style={{flexDirection: 'row',
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"}}>

                                    <Text style={{fontSize: 18, paddingHorizontal: 10}}> +55 </Text>

                                    <TextInput 
                                    ref="textInputMobile"
                                    style={{flex:1, fontSize: 18}}
                                    placeholder = "Digite o seu telefone"
                                    underlineColorAndroid="transparent"
                                    />

                                </View>

                            </View>
                        </TouchableOpacity>
                        
                        {/*Nome*/}
                        <View>
                            <View style={{
                                    marginTop: 25,
                                    paddingHorizontal: 25,
                                    flexDirection: 'row',
                                    justifyContent: "center",
                                    alignItems: "center"
 
                                }}>

                                <View
                                style={{flexDirection: 'row',
                                justifyContent: "center",
                                alignItems: "center"}}>

                                    <Text style={{fontSize: 18, paddingRight: 10}}> Nome: </Text>

                                    <TextInput 
                                    style={{flex:1, fontSize: 18}}
                                    placeholder = "Digite o seu nome"
                                    underlineColorAndroid="transparent"
                                    />

                                </View>

                            </View>
                        </View>

                        {/*E-mail*/}
                        <View>
                            <View style={{
                                    marginTop: 25,
                                    paddingHorizontal: 25,
                                    flexDirection: 'row',
                                    justifyContent: "center",
                                    alignItems: "center"
 
                                }}>

                                <View
                                style={{flexDirection: 'row',
                                justifyContent: "center",
                                alignItems: "center"}}>

                                    <Text style={{fontSize: 18, paddingRight: 10}}> E-mail: </Text>

                                    <TextInput 
                                    style={{flex:1, fontSize: 18}}
                                    placeholder = "Digite o seu e-mail"
                                    underlineColorAndroid="transparent"
                                    />

                                </View>

                            </View>
                        </View>

                        {/*Senha*/}

                        <View>
                            <View style={{
                                    marginTop: 25,
                                    paddingHorizontal: 25,
                                    flexDirection: 'row',
                                    justifyContent: "center",
                                    alignItems: "center"
 
                                }}>

                                <View
                                style={{flexDirection: 'row',
                                justifyContent: "center",
                                alignItems: "center"}}>

                                    <Text style={{fontSize: 18, paddingRight: 10}}> Senha: </Text>

                                    <TextInput
                                    secureTextEntry = {true} 
                                    style={{flex:1, fontSize: 18}}
                                    placeholder = "Digite sua senha"
                                    underlineColorAndroid="transparent"
                                    />

                                </View>

                            </View>
                        </View>

                        

                    
                    </Animated.View>
                    

                    {/* Footer */}
                    <View style = {{
                            height: 70,
                            backgroundColor: 'white',
                            alignItems: "center",
                            justifyContent: "center",
                            borderTopColor: '#e8e8ec',
                            borderTopWidth: 1,
                            paddingHorizontal: 25,
                            flexDirection: "row"
                        }}>
                        <Text style={{
                            color: '#5a7fdf',
                            fontWeight: '200'
                            
                        }}>
                            Como funciona
                        </Text>

                        <Text style={{
                            color: '#5a7fdf',
                            fontWeight: '200',
                            paddingLeft:10
                            
                        }}>
                            Já tem uma conta? 
                        </Text>

                        <Text style={{
                            color: '#5a7fdf',
                            fontWeight: 'bold',
                            paddingLeft:5}}>
                            Entrar
                        </Text>

                        
                    </View>
                </Animatable.View>


                </ImageBackground>
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});