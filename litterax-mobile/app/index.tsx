import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaProvider>
      <View className='flex-1 items-center justify-center bg-red-500'>
        <Text className='text-4xl font-bold text-white'>Creating app with expo</Text>
        <Text className='mt-4 text-xl text-yellow-300'>Testing NativeWind v4</Text>
      </View>
    </SafeAreaProvider>
  )
}
