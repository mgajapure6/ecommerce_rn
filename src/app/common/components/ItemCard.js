import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Input } from '@rneui/themed';


const ItemCard = ({ item, props }) => {


    return (
        <View style={styles.container}>
            <Card ></Card>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    search: {
    }

});

export default ItemCard;