import React from "react";
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from "styled-components";

import { DashBoard } from "../pages/DashBoard";
import { Register } from "../pages/Register";
import { Resume } from "../pages/Resume";


const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 60,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0
        }
      }}
    >

      <Screen
        name="Listagem"
        component={DashBoard}
        options={{
          tabBarIcon: (({size, color}) =>
          <MaterialIcons  
          name="format-list-bulleted"
          size={size}
          color={color}
          />
          )
        }}
      />

      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: (({size, color}) =>
          <MaterialIcons  
          name="attach-money"
          size={size}
          color={color}
          />
          )
        }}
      />

      <Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: (({size, color}) =>
          <MaterialIcons  
          name="pie-chart"
          size={size}
          color={color}
          />
          )
        }}
      />
    </Navigator>
  )
}