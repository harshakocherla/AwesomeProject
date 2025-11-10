import { StyleSheet, Text, View } from "react-native"
import { HomeStackCompositeNavigationProp, HomeStackRouteProp, HomeStackRoutes, TabRoutes } from "../../navigation/routes.constants"
import { useNavigation } from '@react-navigation/native'
import { Button } from "@react-navigation/elements"

type DealsProps = {
    route: HomeStackRouteProp<HomeStackRoutes.DEALS>
}
export const Deals = ({ route }: DealsProps) => {
    const navigation = useNavigation<HomeStackCompositeNavigationProp>()
    const { dealId } = route.params
    return (
        <View style={styles.container}>
            <Text>
                This is Deals: {dealId} Screen
            </Text>
            <Button onPressIn={() => {
                navigation.navigate(TabRoutes.PRODUCTS)
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