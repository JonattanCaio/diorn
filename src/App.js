import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colordark = '#4F565E';
const colorGithub = '#010409';
const imagem= 'https://902536.smushcdn.com/2157270/wp-content/uploads/2022/05/Shikanoin-Heizou.jpg?lossy=0&strip=1&webp=1';
const urlToMyGithub= 'https://github.com/JonattanCaio';

const App = () => {
    const handlePressGoToGithub = async()=> {
        const res = await Linking.canOpenURL(urlToMyGithub);
        
        if(res){
           await Linking.openURL(urlToMyGithub);
           console.log('oi');
        }
    };
    return (
        <SafeAreaView style = {style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style = {style.content}>
                    <Image style={style.avatar} source={{uri: imagem }} />
                    <Text style={[style.name, style.defaultText]}>Jonattan Oliveira</Text>
                    <Text style={[style.defaultText, style.nickname]}>Jonattan</Text>
                    <Text style={[style.defaultText, style.description]}>Apenas um estudante de engenharia </Text>
                    <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            github
                        </Text>
                    </View>
                    </Pressable>
            </View>
        </SafeAreaView>
    
    );
};

export default App;

const style = StyleSheet.create({
    container : {
        //collumn
        backgroundColor: colorGithub,
        flex:1,//expandir para tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
        
    },
    avatar : {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'cyan',
        borderWidth: 3,
    },
    defaultText : {
        color: 'white',
        
    },
    name :{
        fontSize:32,
        marginTop: 3,

    },
    nickname : {
        fontSize: 28,
        marginTop: 3,
        color: 'lightblue',
    },
    description : {
        fontWeight: 'bold',
        fontsize:22,
        marginTop: 3,
    },
    button:{
        backgroundColor : colordark,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 10,
        color: "white",
    }
});