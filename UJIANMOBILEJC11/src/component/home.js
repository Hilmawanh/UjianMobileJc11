import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'


const Home = () => {

    return (
        <View style={styles.containerStyle}>
            <Header
                rightComponent={{
                    text: `Hallo`,
                    style: { color: 'white', fontSize: 18, fontWeight: '700' }
                }}
                leftComponent={{
                    icon: 'food',
                    color: 'white',
                    type: 'material-community',
                }}
                containerStyle={{
                    backgroundColor: 'red',
                    justifyContent: 'space-around',
                    elevation: 2,
                    marginTop: Platform.OS === 'ios' ? 0 : - 25
                }}
                rightContainerStyle={{
                    flex: 3
                }}
            />
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                paddingTop: 10
            }}>
                {/* <Icons icons={'credit-card'} types={'entypo'} name={'Credit'} />
                <Icons icons={'food-variant'} types={'material-community'} name={'Variant'} />
                <Icons icons={'food-fork-drink'} types={'material-community'} name={'Recipe'} />
                <Icons icons={'location-pin'} types={'entypo'} name={'Location'} />
                <Icons icons={'shopping-cart'} types={'font-awesome'} name={'Cart'} />
                <Icons icons={'local-pizza'} types={'material'} name={'Pizza'} />
                <Icons icons={'hamburger'} types={'material-community'} name={'Burger'} />
                <Icons icons={'more-horizontal'} types={'feather'} name={'More'} /> */}

                    <Icon name='credit-card' type='entypo' style={styles.containerIcon} />
                    <Icon name='food-variant' type='material-community' />
                    <Icon name='food-fork-drink' type='material-community' />
                    <Icon name='location-pin' type='entypo' />

                {/* <Icon name='credit-card' type='entypo' style={styles.containerIcon} />
                <Icon name='credit-card' type='entypo' style={styles.containerIcon} />
                <Icon name='credit-card' type='entypo' style={styles.containerIcon} />
                <Icon name='credit-card' type='entypo' style={styles.containerIcon} /> */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerIcon: {
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 45,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    }
})

export default Home;