import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Button,
    ToastAndroid,
    Platform,
    Alert,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { updateItem } from '../../redux/ItemStore'

import Settings from '../../Strings';
import styles from './styles.js';

export default function ExtendedItemEditComponent(props) {


    const dispatch = useDispatch();
    const item = props.item;
    const navigation = props.navigation;

    const [title, onChangeTitle] = React.useState(item.title);
    const [description, onChangeDesc] = React.useState(item.description);
    const [value, setValue] = React.useState(item.catagory);
    const [priority, setPrioroty] = React.useState(item.priority);
    const savePressed = () => {
        let newItem = {
            title: title,
            description: description,
            id: item.id,
            isDone: item.isDone,
            catagory: value,
            priority: priority,

        }

        dispatch(updateItem({ item: newItem }));
        navigation.navigate('ListPage');

    }

    return (
        
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>

                    <View style={styles.colContainer}>
                        <Text style={styles.label}>
                            {Settings.strings.english.title}
                        </Text>
                        <TextInput style={styles.data}
                            placeholder={item.title}
                            maxLength={25}
                            autoCorrect={false}
                            multiline={false}
                            onChangeText={text => onChangeTitle(text)}
                        />

                    </View>

                    <View style={styles.colContainer}>
                        <Text style={styles.label}>
                            {Settings.strings.english.description}
                        </Text>
                        <TextInput style={styles.data}
                            placeholder={item.description}
                            maxLength={120}
                            autoCorrect={false}
                            multiline={true}
                            onChangeText={text => onChangeDesc(text)}
                        />
                    </View>

                    <View style={styles.colContainer}>
                        <Text style={styles.label}>
                            {Settings.strings.english.priority}
                        </Text>
                        <View  >
                            <RadioButton.Group onValueChange={priority => setPrioroty(priority)}
                                value={priority}
                            >
                                <RadioButton.Item label={Settings.strings.english.low} value={100} />
                                <RadioButton.Item label={Settings.strings.english.medium} value={500} />
                                <RadioButton.Item label={Settings.strings.english.high} value={1000} />

                            </RadioButton.Group>
                        </View >
                    </View>

                    <View style={styles.colContainer}>

                        <Text style={styles.label}>
                            {Settings.strings.english.category}
                        </Text>
                        <View style={styles.catagoryContainer}>

                            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                                <RadioButton.Item label={Settings.strings.english.work} value="work" />
                                <RadioButton.Item label={Settings.strings.english.home} value="private" />

                            </RadioButton.Group>
                        </View >
                        <Button title={Settings.strings.english.save} onPress={savePressed}></Button>
                    </View>


                </View>
            </ScrollView>
       

    );
}