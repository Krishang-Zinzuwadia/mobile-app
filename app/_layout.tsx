import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './screens/HomeScreen';
import { ListenScreen } from './screens/ListenScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { BottomTabBar } from './components/BottomTabBar';
import { colors } from './constants/colors';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor={colors.backgroundDark} />
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <BottomTabBar {...props} />}
          screenOptions={{
            headerShown: false,
            lazy: true,
          }}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              tabBarIcon: () => null,
            }}
          />
          <Tab.Screen 
            name="Listen" 
            component={ListenScreen}
            options={{
              tabBarIcon: () => null,
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
              tabBarIcon: () => null,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
