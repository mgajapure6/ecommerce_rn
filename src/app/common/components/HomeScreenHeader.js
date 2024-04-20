import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View } from 'react-native';
import { Modal } from 'react-native-paper';

export function HomeScreenHeader(){

    return (<View>
        <Text>HomeScreen Header</Text>
    </View>);
}

export function HomeScreenHeaderLeft()  {
    return (<Ionicons name="home-outline" size="22" style={{padding: 15}}/>);
}

export function HomeScreenHeaderRight(){

    function handleSearchClick(){
        return(
            <View>
                <Ionicons name="search" size="22" style={{padding: 15}} onPress={()=> handleSearchClick}/>
                <Modal>
                <Text>Hello</Text>
            </Modal>
            </View>
            
        )
    }

    return handleSearchClick();
}
