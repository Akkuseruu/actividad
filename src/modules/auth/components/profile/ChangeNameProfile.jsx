import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Overlay } from '@rneui/base';

export default function ChangeNameProfile(props) {
    const { isVisible, setIsVisible } = props;
    return (
        <Overlay 
            isVisible={isVisible} 
            overlayStyle={styles.container} 
            onBackdropPress={() => setIsVisible(false)}
        >
            <Text>ChangeNameProfile</Text>
        </Overlay>
    );
}
const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: 'green',
    }
})
//rnfs