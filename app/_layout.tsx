import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="athlete/[id]"
          options={{ headerTitle: 'Athlete', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="content/[id]"
          options={{ headerShown: false, presentation: 'modal' }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
