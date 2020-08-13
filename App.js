import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import WeatherScreen from "./screens/WeatherScreen";
import BanScreen from "./screens/BanScreen";
import ActivityScreen from "./screens/ActivityScreen";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBan, faCalendarAlt, faCloudSun, faHome, faImages, faRoute} from "@fortawesome/free-solid-svg-icons";
import ImageScreen from "./screens/ImageScreen";
import {StoreContextProvider} from "./contexts/StoreContext";
import 'mobx-react/batchingForReactNative';
import RootStore from "./stores/RootStore";

const Tab = createBottomTabNavigator();

const store = new RootStore();

export default function App() {
    return (
        <StoreContextProvider store={store}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home"
                               screenOptions={({ route }) => ({
                                    tabBarIcon: ({ focused, color, size }) => {
                                        let icon = {
                                            'Home': faHome,
                                            'Weather': faCloudSun,
                                            'Bans': faBan,
                                            'Activities': faCalendarAlt,
                                            'Routes': faRoute,
                                            'Images': faImages,
                                        }[route.name];

                                        let iconColor = focused ? '#8199AC' : '#013357';

                                        return <FontAwesomeIcon icon={icon} size={24} color={iconColor} />;
                                    },
                                })}
                               tabBarOptions={{
                                   activeTintColor: '#8199AC',
                                   inactiveTintColor: '#013357',
                               }}>
                    <Tab.Screen name="Home" component={HomeScreen} options={{title: "Hem"}} />
                    <Tab.Screen name="Weather" component={WeatherScreen} options={{title: "Väder"}} />
                    <Tab.Screen name="Bans" component={BanScreen} options={{title: "Avlysningar"}} />
                    <Tab.Screen name="Activities" component={ActivityScreen} options={{title: "Aktiviteter"}} />
                    {/* <Tab.Screen name="Routes" component={RouteScreen} options={{title: "Turer"}} /> */}
                    <Tab.Screen name="Images" component={ImageScreen} options={{title: "Bildflöde" }} />
                </Tab.Navigator>
                <StatusBar style="auto" />
            </NavigationContainer>
        </StoreContextProvider>
    );
}
