import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainInfo from "./MainInfo";
import Graphs from "./Graphs";
import Books from "./Books";
import { AppTheme } from "../constants/data";
import BookInfo from "./BookInfo";
import AddBook from "./AddBook";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const stackScreen = () => {
    return(
        <Stack.Navigator initialRouteName="Books">
            <Stack.Screen
                name="Books"
                component={Books}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Books',
                    tabBarIcon: () => (
                        <View>
                            <Icon
                                name={'film'}
                            />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="BookInfo"
                component={BookInfo}
            />
            <Stack.Screen
                name="AddBook"
                component={AddBook}
            />
        </Stack.Navigator>
    )
}

const RootNavigator = () => {
    return (
        <NavigationContainer theme={ AppTheme }>
            <Tab.Navigator
                shifting={true}
                sceneAnimationEnabled={true}
                initialRouteName="Creator"
            >
                <Tab.Screen
                    name="Creator"
                    component={MainInfo}
                    options={{
                        tabBarLabel: 'Creator',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'angellist'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Graphs"
                    component={Graphs}
                    options={{
                        tabBarLabel: 'Graphs',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'area-chart'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name='Books'
                    options={{
                        tabBarLabel: 'Books',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'book'}
                                />
                            </View>
                        ),
                    }}
                    component={stackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
