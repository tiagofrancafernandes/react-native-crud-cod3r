import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import PageAutoTheme from "./views/PageAutoTheme";
import { Button, Icon } from "react-native-elements";
import theme from "./styles/theme";

const Stack = createNativeStackNavigator();

export default props =>
{
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({ navigation }) =>
                    {
                        return {
                            title: "Usuários",
                            headerRight: () =>
                            {
                                return (
                                    <Button
                                        onPress={() => navigation.navigate("UserForm")}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color={theme.colors.text_detail} tvParallaxProperties />}
                                    />
                                );
                            }
                        }
                    }}
                />

                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{
                        title: "Formulário de usuários",
                        // headerRight: () =>
                        // {
                        //     return (
                        //         <>
                        //             <Button title="Save" onPress={() => {}} />
                        //             <Button title="Cancel" onPress={() => {}} />
                        //         </>
                        //     );
                        // }
                    }}
                />

                <Stack.Screen
                    name="PageAutoTheme"
                    component={PageAutoTheme}
                    options={{
                        title: "Auto Dark mode",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const screenOptions = {
    // headerShown: false,//Se deve mostrar o herder
    tabBarActiveTintColor: theme.colors.main,
    tabBarInactiveTintColor: theme.colors.text_detail,
    tabBarShowLabel: false,
    headerStyle: {
        backgroundColor: theme.colors.main,
    },
    tabBarStyle: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 78,
        backgroundColor: theme.colors.background_primary
    },
    headerTintColor: "#fff"
}
