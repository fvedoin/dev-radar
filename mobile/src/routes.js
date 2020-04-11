import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ 
                        title: 'DevRadar',
                        headerStyle: {
                            backgroundColor: '#7d40e7',
                        },
                        headerTintColor: '#fff',
                        headerBackTitle: null,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ 
                        title: 'Perfil no Github',
                        headerStyle: {
                            backgroundColor: '#7d40e7',
                        },
                        headerTintColor: '#fff',
                        //deixa o título invisível
                        headerBackTitleVisible: false,
                        //deixa o título nulo
                        //headerBackTitle: null,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;