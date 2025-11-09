import { useNavigation } from "@react-navigation/native"
import { Button } from "@react-navigation/elements"
import { StyleSheet, Text, View } from "react-native"
import { AppNavigationProp, AppRoutes } from "../../navigation/routes.constants"
import { useEffect, useState } from "react"
import { getMessage } from "../../native/HelloHarsha"

export const Home = () => {
    const navigation = useNavigation<AppNavigationProp>()
    const [message, setMessage] = useState<string>('loading...')
    useEffect(() => {
        getMessage().then(setMessage)
    },[])
    return (
        <View style={styles.container}>
            <Text>
                { message }
            </Text>
            <Text>
                This is Home Screen
            </Text>
            <Button onPress={ () => navigation.navigate(AppRoutes.DEALS) } >View Deals</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center'
    }
})