import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { Button } from 'galio-framework';

function Category({navigation}){

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Categories </Text>
            <Image src='https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80' style={{width: 100, height: 100}}></Image>
        </View>
      );
}

export default Category;