import { StyleSheet, Text, View } from "react-native"
import { AppNavigationProp, AppRouteProp, AppRoutes } from "../../navigation/routes.constants"
import { useNavigation } from '@react-navigation/native'
import { Button } from "@react-navigation/elements"

type DealsProps = {
    route: AppRouteProp<AppRoutes.DEALS>
}
export const Deals = ({ route }: DealsProps) => {
    const navigation = useNavigation<AppNavigationProp>()
    const { dealId } = route.params
    return (
        <View style={styles.container}>
            <Text>
                This is Deals: {dealId} Screen
            </Text>
            <Button onPressIn={() => {
                navigation.navigate(AppRoutes.PRODUCTS)
            }}>
                View all Products
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center'
    }
})