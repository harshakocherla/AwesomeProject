import { StyleSheet, Text, View } from "react-native"
import { AppRouteProp, AppRoutes } from "../../navigation/routes.constants"

type DealsProps = {
    route: AppRouteProp<AppRoutes.DEALS>
}
export const Deals = ({ route }: DealsProps) => {
    const { dealId } = route.params
    return (
        <View style={styles.container}>
            <Text>
                This is Deals: {dealId} Screen
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