import React, { Component } from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { withFirebaseHOC } from '../config/Firebase'
import { ListItem } from 'react-native-elements'

const list = [
    {
        name: 'Name user',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Test user',
     
    },
    {
        name: 'Name user',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Test user',
     
    },

]

class Leaderbord extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Leaderbord</Text>

                <View style={styles.black}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                                // Ik moet ff kijken hoe ik de punten ga weergeven de badge moet de value in de state voor firebase
                                badge={{ value: 3, textStyle: { color: 'white' ,backgroundColor:'black'}}}
                                bottomDivider
                            />
                        ))
                    }
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        textTransform: 'uppercase',

    },
    header: {
        alignSelf: "center",
        fontSize: 40,
        fontWeight: "bold",

    },black:{
        backgroundColor:"black"
    }

})

export default withFirebaseHOC(Leaderbord)
