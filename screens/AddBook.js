import React, { useState } from "react";
import {
    View, Text,
    StyleSheet,
    Dimensions,
    ScrollView, TouchableOpacity
} from 'react-native'
import { BtnTheme, useScreenDimensions} from "../constants/data";
import { Button } from "react-native-elements";
import { FloatingLabelInput } from 'react-native-floating-label-input';


const AddBook = ({ navigation, route }) => {

    const { books } = route.params;
    const { setBooksData } = route.params;

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [price, setPrice] = useState('');

    const screenData = useScreenDimensions();

    const onAdd = () => {

        const parsed = parseInt(price);

        let Idx = 50

        if(title === '') {
            setTitle('You must entered Title')
            setTimeout(() => {
                setTitle('')
            }, 2000);
        } else if (subtitle === ''){
            setSubtitle('You must entered Subtitle')
            setTimeout(() => {
                setSubtitle('')
            }, 2000);
        } else if (isNaN(parsed)) {
            setPrice('The price must be a number')
            setTimeout(() => {
                setPrice('')
            }, 2000);
        } else {
            const newBook = {
                title: title,
                subtitle: subtitle,
                isbn13: Idx++,
                price: price,
                image: '',
            }

            const newBooksData = [...books, newBook]

            setBooksData(newBooksData)

            navigation.navigate('Books')
        }
    }

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
        >
            <View style={{padding: 50, flex: 1}}>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        countdownLabel="chars left"
                        placeholder={''}
                        maxLength={100}
                        showCountdown={true}
                        style={{color: '#fff'}}
                        label={'Title'}
                        value={title}
                        rightComponent={(
                            <TouchableOpacity
                                style={{
                                    alignContent:'center',
                                    justifyContent:'center'
                                }}
                                onPress={()=>{
                                    setTitle('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setTitle(val)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        label={'Subtitle'}
                        value={subtitle}
                        rightComponent={(
                            <TouchableOpacity
                                style={{
                                    alignContent:'center',
                                    justifyContent:'center'
                                }}
                                onPress={()=>{
                                    setSubtitle('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setSubtitle(val)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        keyboardType="numeric"
                        label={'Price'}
                        value={price}
                        rightComponent={(
                            <TouchableOpacity
                                style={{
                                    alignContent:'center',
                                    justifyContent:'center'
                                }}
                                onPress={()=>{
                                    setPrice('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setPrice(val)}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Button
                        onPress={() => {
                            onAdd()
                        }}
                        theme={BtnTheme}
                        title="Add"
                        buttonStyle={{ width: 150 }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20
    },
});

export default AddBook
