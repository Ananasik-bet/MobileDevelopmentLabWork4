import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Switch, Dimensions, ScrollView} from 'react-native';
import {LineChart, PieChart} from "react-native-chart-kit";
import {AppBarTheme, data, labels, useScreenDimensions} from '../constants/data'
import {Appbar} from "react-native-paper";
import SearchBar from "react-native-dynamic-search-bar";

const Graphs = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const Home = () => {
        navigation.navigate('Creator');
    }

    const checkOrientation = () => {
        const dim = Dimensions.get('screen');
        if (dim.height >= dim.width) {
            return portrait
        } else {
            return landscape
        }
    }

    const dim = Dimensions.get('screen')
    const screenData = useScreenDimensions();

    if (isEnabled) {
        return (
            <View style={{ height: dim.height, backgroundColor: '#f8ecdd' }}>
                <View>
                    <Appbar.Header theme={ AppBarTheme }>
                        <Appbar.Action
                            icon="home"
                            onPress={Home}
                        />
                        <SearchBar
                            style={{ backgroundColor: '#f8ecdd', flex: 1}}
                            placeholder="Search"
                        />
                        <Appbar.Action
                            icon="plus"
                        />
                    </Appbar.Header>
                </View>
                <View style={{
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: screenData.isLandscape ? '30%' : '20%',
                }}>
                    <Text>Show Chart</Text>
                    <Switch
                        trackColor={{ false: "#ffcdb2", true: "#4A3939" }}
                        thumbColor={isEnabled ? "#ffcdb2" : "#4A3939"}
                        ios_backgroundColor="#4A3939"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={checkOrientation().toggle}
                    />
                    <PieChart
                        data={[
                            {
                                percent: 5,
                                color: '#755a57',
                            },
                            {
                                percent: 5,
                                color: '#92fff6',
                            },
                            {
                                percent: 10,
                                color: '#f07e5e',
                            },
                            {
                                percent: 80,
                                color: '#2e5e9d',
                            },
                        ]}
                        hasLegend={false}
                        width={
                            screenData.isLandscape ?
                            Dimensions.get('screen').width :
                            Dimensions.get('screen').width
                        }
                        height={
                            screenData.isLandscape ?
                            Dimensions.get("screen").height / 1.8:
                            Dimensions.get("screen").height / 3
                        }
                        chartConfig={{
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        }}
                        style={{
                            alignItems: "center",
                            marginLeft: '50%',
                        }}
                        accessor="percent"
                        absolute
                    />
                </View>
            </View>
        )
    } else {
        return (
            <View style={{ height: dim.height, backgroundColor: '#f8ecdd' }}>
                <View>
                    <Appbar.Header theme={ AppBarTheme }>
                        <Appbar.Action
                            icon="home"
                            onPress={Home}
                        />
                        <SearchBar
                            style={{ backgroundColor: '#f8ecdd', flex: 1}}
                            placeholder="Search"
                        />
                        <Appbar.Action
                            icon="plus"
                        />
                    </Appbar.Header>
                </View>
                <View style={{
                    flex: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: screenData.isLandscape ? '30%' : '20%',
                }}>
                    <Text>Show Pie</Text>
                    <Switch
                        trackColor={{ false: "#4A3939", true: "#75a096" }}
                        thumbColor={isEnabled ? "#4A3939" : "#75a096"}
                        ios_backgroundColor="#4A3939"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={checkOrientation().toggle}
                    />
                    <LineChart
                        data={{
                            labels: labels,
                            datasets: [
                                {
                                    data: data
                                }
                            ]
                        }}
                        width={
                            screenData.isLandscape ?
                                Dimensions.get("screen").width :
                                Dimensions.get("screen").width * 1.3
                        }
                        height={
                            screenData.isLandscape ?
                                Dimensions.get("screen").height / 4.5 :
                                Dimensions.get("screen").height / 6
                        }
                        chartConfig={{
                            backgroundColor: "#f8ecdd",
                            backgroundGradientFrom: "#f8ecdd",
                            backgroundGradientTo: "#f8ecdd",
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            propsForDots: {
                                r: "0",
                                strokeWidth: "0",
                                stroke: "#000",
                                barPercentage: '1'
                            }
                        }}
                        style={
                            screenData.isLandscape ?
                                {
                                    paddingRight: Dimensions.get("screen").width / 4.5,
                                    marginLeft: Dimensions.get("screen").width / 10,
                                    marginTop: Dimensions.get("screen").height / 6.5,
                                } :
                            {
                                paddingRight: Dimensions.get("screen").width / 4,
                                marginLeft: Dimensions.get("screen").width / 9,
                                marginTop: Dimensions.get("screen").height / 11,
                            }
                        }
                        withInnerLines={false}
                        withOuterLines={false}
                        withHorizontalLabels={false}
                        withVerticalLabels={false}
                        bezier
                    />
                </View>
            </View>
        )
    }
}

const portrait = StyleSheet.create({
    toggle: {
        flex: 0,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
});

const landscape = StyleSheet.create({
    toggle: {
        flex: 0,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default Graphs
