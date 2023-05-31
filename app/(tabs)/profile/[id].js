import { View, Text } from 'react-native';
import { Stack, useSearchParams } from 'expo-router';

const DetailsPage = () => {
    const { id } = useSearchParams();

    return (
        <View>
            <Stack.Screen options={{headerTitle: `Detail #${id}`}} />
            <Text>My Detail {id}</Text>
        </View>
    )
}

export default DetailsPage;

