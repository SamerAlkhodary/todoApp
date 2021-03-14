import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import ExtendedItemViewComponent from '../../components/ExtendedItemViewComponent'
import ExtendedItemEditComponent from '../../components/ExtendedItemEditComponent'
import Settings from '../../Strings';
import styles from './styles.js';

export default function ExtendedItemPage(props) {
    const [editState, setEditState] = React.useState(false);

    const editPressed = () => {
        setEditState(!editState);

    }
    let icon = editState ? 'arrow-forward' : 'edit';
    console.log(editState);

    navigation = props.navigation;
    const { state } = navigation;

    const item = state.params.item;

    return (


        <View style={styles.container}>
            <View style={styles.appbar}>
                <Text style={styles.appbarTitle}>{Settings.strings.english.item}</Text>
                <Pressable onPress={editPressed}>
                    <MaterialIcons name={icon} color='white' style={styles.iconButton}>
                    </MaterialIcons>
                </Pressable>
            </View>
            { editState && <ExtendedItemEditComponent item={item} navigation={props.navigation}></ExtendedItemEditComponent>}
            { !editState && <ExtendedItemViewComponent item={item}></ExtendedItemViewComponent>}

        </View>

    );

}


