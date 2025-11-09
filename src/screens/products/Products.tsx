import { StyleSheet, Text, View } from "react-native"

export const Products = () => {
    return (
        <View style={styles.container}>
            <Text>
                This is Products Screen
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