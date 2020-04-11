import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

import { MaterialIcons } from '@expo/vector-icons';

function Main({ navigation }) {

    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitailPosition() {

            const { granted } = await requestPermissionsAsync();
            
            if(granted){
                const { coords } = await getCurrentPositionAsync({
                    //if true, the gps is used else the wifi is used
                    enableHighAccuracy: true
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                })
            }
        }
        loadInitailPosition();

    }, []);

    if(!currentRegion){
        return null;
    }

    return (
        <>
            <MapView initialRegion={currentRegion} style={styles.map}>
                <Marker coordinate={{ latitude: -29.7084117, longitude: -53.7020824}}>
                    <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/20287680?s=460&u=26d6550cbdf8e95ae37b7a050b20df7239c67586&v=4' }} />
                    <Callout onPress={() => {
                        navigation.navigate('Profile', { github_username: 'fvgarcia' })
                    }}>
                        <View style={styles.callout}>
                            <Text style={styles.devName}>Fernando Garcia</Text>
                            <Text style={styles.devBio}>aaa aa aaaa aaa</Text>
                            <Text style={styles.devTechs}>React, React Native</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <View style={styles.searchForm}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar devs por techs..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />

                <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
                    <MaterialIcons name="my-location" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </>
    );

}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff'
    },
    callout: {
        width: 260
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    devBio: {
        color: '#666',
        marginTop: 5
    },
    devTechs: {
        marginTop: 5
    },
    searchForm: {
        position: 'absolute',
        // top for form stays on the page top 
        bottom: 20,
        left: 12,
        right: 12,
        zIndex: 5,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        //IOS shadow
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        //Android shadow
        elevation: 2
    },
    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8d4dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    }
});

export default Main;