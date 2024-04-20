import * as React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Input } from '@rneui/themed';


class Search extends React.Component {

    //const[search, setSearch] = React.useState("");


    render() {
        return (
            <View>
                <Input placeholder="Search here..." rightIcon={() => <Ionicons name='search' size={22} />} />
                <ScrollView style={styles.container}
                    showsVerticalScrollIndicator={false}>
                           <Text>JBHj</Text>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    search: {
    }

});

export default Search;