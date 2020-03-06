import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';


const Login = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text h3 style={{ color: 'red' }}>TomatoApp</Text>
            <Icon
                name='food'
                size={80}
                type='material-community'
                color='red'
            />
            <View style={styles.inputContainerStyle}>
                <Input
                    placeholder='Username'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            type='feather'
                            color='red'
                        />
                    }
                />
            </View>
            <Text style={{ color: 'red' }}></Text>
            <Button
                title="Enter"
                containerStyle={{ width: '85%', marginBottom: 10 }}
                buttonStyle={{ backgroundColor: 'red', color: 'white' }}
                onPress={() => props.navigation.navigate('Drawermain')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerSplashStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inputContainerStyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '85%'
    }
})

export default Login;