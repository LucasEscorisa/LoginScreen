import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground
} from "react-native";

class LoginScreen extends Component {

    //Header config
    static navigationOptions = {
        header: null
    }

    //Content
    render() {
        return (
            <View style={{ flex: 1 }}>
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
                    <View style = {{
                        width: 110,
                        height: 110,
                        backgroundColor: 'white',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style = {{fontWeight: '600'}}>ISENÇÕES BR</Text>
                    </View>
                </View>

                {/* Login Area */}
                <View>

                    <View style = {{
                        height: 150,
                        backgroundColor: 'white'
                    }}>

                    </View>

                    {/* Footer */}
                    <View style = {{
                            height: 70,
                            backgroundColor: 'white',
                            alignItems: "flex-start",
                            justifyContent: "center",
                            borderTopColor: '#e8e8ec',
                            borderTopWidth: 1,
                            paddingHorizontal: 25
                        }}>
                        <Text style={{
                            color: '#5a7fdf',
                            fontWeight: 'bold',
                            
                        }}>
                            Ou entre com sua rede social
                        </Text>

                        
                    </View>
                </View>

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