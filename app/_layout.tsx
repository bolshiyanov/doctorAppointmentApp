import { Stack} from "expo-router";
export default function RootLayout () {
    return <Stack>
        <Stack.Screen name="index" options={{title: 'Find docctors'}}/>
        {/* <Stack.Screen name="search" options={{title: 'Find docctors'}}/> */}
    </Stack>
    
}