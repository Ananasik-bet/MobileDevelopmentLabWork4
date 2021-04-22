import React from "react";
import {
    View, Text,
    StyleSheet, Dimensions, ScrollView, TouchableHighlight, Image
} from 'react-native'
import {getBookImage, getFullBookInfo, useScreenDimensions} from "../constants/data";

const BookInfo = ({ route }) => {

    const { Id } = route.params;

    const screenData = useScreenDimensions();

    let fullBookInfo = []

    fullBookInfo.push(getFullBookInfo(Id))

    return (
        <ScrollView style={{backgroundColor: '#f8ecdd'}}>
            <View>
                <View style={{
                    flex: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {
                        fullBookInfo.map((item, index) => {
                            return (
                                <View key={index}>
                                    <View style={orientation().mainTopContainer}>
                                        <TouchableHighlight style={orientation().imgContainer}>
                                            <Image
                                                resizeMode="cover"
                                                source={
                                                    getBookImage(item.image)
                                                }
                                                style={orientation().img}
                                            />
                                        </TouchableHighlight>
                                        <View style={orientation().topRightContainer}>
                                            <Text style={orientation().txtTitle}>
                                                {item.title}
                                            </Text>
                                            <View>
                                                <Text
                                                    style={orientation().topTxt
                                                    }>
                                                    {item.subtitle}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={orientation().topTxt
                                                    }>
                                                    Year - {item.year}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={orientation().topTxt
                                                    }>
                                                    Price - ${item.price}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={orientation().topTxt
                                                    }>
                                                    Pages - {item.pages}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={orientation().bottomTxtContainer}>
                                        <Text style={orientation().bottomTitleTxt}>Rating</Text>
                                        <Text style={orientation().bottomTxt}>{item.rating}</Text>
                                        <Text style={orientation().bottomTitleTxt}>Authors</Text>
                                        <Text style={orientation().bottomTxt}>{item.authors}</Text>
                                        <Text style={orientation().bottomTitleTxt}>Publisher</Text>
                                        <Text style={orientation().bottomTxt}>{item.publisher}</Text>
                                        <Text style={orientation().bottomTitleTxt}>Other information</Text>
                                        <Text style={orientation().bottomTxt}>
                                            {item.desc}
                                        </Text>
                                    </View>
                                </View>
                            )
                        })
                    }

                </View>
            </View>
        </ScrollView>
    )
}

const portrait_styles = StyleSheet.create({
    mainTopContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
    },
    topRightContainer: {
        width: 180
    },
    imgContainer: {
        marginLeft: '2%',
        marginTop: 25,
        height: 255,
        width: 155,
    },
    img: {
        height: 245,
        width: 145,
        borderRadius: 20,
    },
    txtTitle: {
        width: 200,
        fontSize: 22,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    topTxt: {
        color: '#292929',
        fontSize: 18,
        marginBottom: 5,
    },
    bottomTxtContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    bottomTitleTxt: {
        color: '#292929',
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    bottomTxt:{
        color: '#292929',
        fontSize: 18,
        marginBottom: 5,
    },
});

const landscape_styles = StyleSheet.create({
    mainTopContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
    },
    topRightContainer: {
        width: 180,
    },
    imgContainer: {
        marginLeft: '1%',
        marginTop: 25,
        height: 255,
        width: 155,
    },
    img: {
        height: 245,
        width: 145,
        borderRadius: 20,
    },
    txtTitle: {
        width: 230,
        fontSize: 22,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    topTxt: {
        color: '#292929',
        width: 190,
        fontSize: 18,
        marginBottom: 5,
    },
    bottomTxtContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    bottomTitleTxt: {
        color: '#292929',
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    bottomTxt:{
        color: '#292929',
        fontSize: 18,
        marginBottom: 5,
    },
});

const orientation = () => {
    const dim = Dimensions.get('screen');
    if (dim.height >= dim.width) {
        return portrait_styles
    } else {
        return landscape_styles
    }
}

export default BookInfo
