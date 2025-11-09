import { StyleSheet, Text, View } from "react-native"

export const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>
                This is Profile Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center'
    }
})