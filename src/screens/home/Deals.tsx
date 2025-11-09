import { StyleSheet, Text, View } from "react-native"

export const Deals = () => {
    return (
        <View style={styles.container}>
            <Text>
                This is Deals Screen
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