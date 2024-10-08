import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';


class Home extends Component {
    render() {
        const mainImage = require('./assets/produk8.png');
        const newImages = [
            { source: require('./assets/produk4.jpeg'), title: 'Dress 1', subtitle: '10$' },
            { source: require('./assets/produk5.jpeg'), title: 'Dress 2', subtitle: '12$' },
            { source: require('./assets/produk6.jpeg'), title: 'Dress 3', subtitle: '15$' },
            { source: require('./assets/produk7.jpeg'), title: 'Dress 4', subtitle: '15$' },

            
        ];
        const twoimage = [
            { source: require('./assets/produk3.jpeg'), title: 'cool', subtitle: '15$' },
            { source: require('./assets/produk6.jpeg'), title: 'cool', subtitle: '15$' },
            { source: require('./assets/produk7.jpeg'), title: 'cool', subtitle: '15$' },
            { source: require('./assets/produk5.jpeg'), title: 'cool', subtitle: '15$' },
        ];

        return (
            <SafeAreaView style={{
                flex: 1,ckgroundColor: '#ffffff',
            }}>
                <ScrollView>
                    <View style={{position: 'relative',}}>
                        <Image source={mainImage} style={{width: '100%',height: 200,resizeMode: 'cover',}} />
                        <View style={{
                            position: 'absolute',
                            buttom: 40,
                            left: 20,
                            right: 20,
                            alignItems: 'flex-start',
                            marginTop: 120,
                    
                        }}>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 40,
                                fontWeight: 'bold',
                            }}>Street Clotes</Text>
            
                        </View>
                    </View>
                    <View style={{padding: 20,}}>
                        <Text style={{fontSize: 24,fontWeight: 'bold',}}>Sale</Text>
                        <Text style={{
                            color: '#888888',
                            marginVertical: 10,
                            fontSize: 20,
                        }}>You've never seen it before!</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row',}}>
                            {newImages.map((item, index) => (
                                <View key={index} style={{marginRight: 16, alignItems: 'center',}}>
                                    <Image source={item.source} style={{
                                        width: 150,
                                        height: 200,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                
                                    }} />
                                    <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5,}}>{item.title}</Text>
                                    <Text style={{fontSize: 15, color: 'red',}}>{item.subtitle}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{padding: 20,}}>
                        <Text style={{fontSize: 24,fontWeight: 'bold',}}>New</Text>
                        <Text style={{
                            color: '#888888',
                            marginVertical: 10,
                            fontSize: 20,
                        }}>You've never seen it before!</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row',}}>
                            {twoimage.map((item, index) => (
                                <View key={index} style={{marginRight: 16, alignItems: 'center',}}>
                                    <Image source={item.source} style={{
                                        width: 150,
                                        height: 200,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                
                                    }} />
                                    <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5,}}>{item.title}</Text>
                                    <Text style={{fontSize: 15, color: 'red',}}>{item.subtitle}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Home;

