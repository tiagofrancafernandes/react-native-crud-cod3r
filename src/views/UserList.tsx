import React from "react";
import
{
    FlatList,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableHighlight,
} from 'react-native';
import users from "../data/users";
import theme from "../styles/theme";
import { ListItem, Avatar } from "react-native-elements";

export default props =>
{
    const isDarkMode = useColorScheme() === 'dark';
    const textStyle = isDarkMode ? styles.textColorsDark : styles.textColorsLight;
    const new_style = [styles.title, textStyle];
    const listItemLine = isDarkMode ? [{backgroundColor: theme.colors.background_in_dark_mode,}, styles.listItemLine] : styles.listItemLine;

    // console.warn(Object.keys(props));//Debug

    const renderItem = ({ item: user }) => (
        <ListItem
            Component={TouchableHighlight}
            containerStyle={listItemLine}
            disabledStyle={{ opacity: 0.5 }}
            onLongPress={() => console.log("onLongPress()")}
            onPress={() => console.log("onLongPress()")}
            pad={20}
        >
            <Avatar
                source={{ uri: user.avatar }}
            />
            <ListItem.Content>
                <ListItem.Title style={textStyle}>
                    <Text>{user.name}</Text>
                </ListItem.Title>
                <ListItem.Subtitle style={textStyle}>
                    <Text>{user.email}</Text>
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );

    return (
        <View style={styles.sectionContainer}>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 3,
        marginHorizontal: 0,
    },
    listItemLine: {
        marginVertical: 3,
        marginHorizontal: 0,
        marginBottom: 3,
    },
    title: {
        fontSize: 20,
    },
    sectionContainer: {
        flex: 1,
        marginTop: 0,
        paddingHorizontal: 0,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    textDefault: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    textColorsDark: {
        backgroundColor: theme.colors.background_in_dark_mode,
        color: theme.colors.color_in_dark_mode,
    },
    textColorsLight: {
        backgroundColor: theme.colors.background_in_light_mode,
        color: theme.colors.color_in_light_mode
    }
});
