import { Tabs } from 'expo-router';
import { Colors } from '@/constants/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.scarlet,
        tabBarInactiveTintColor: Colors.osuGray,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopColor: '#E5E5E5',
        },
        headerStyle: { backgroundColor: Colors.scarlet },
        headerTintColor: Colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => (
            <TabIcon emoji="📱" color={color} />
          ),
          headerTitle: 'BehindtheO',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <TabIcon emoji="🔍" color={color} />
          ),
          headerTitle: 'Explore Sports',
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color }) => (
            <TabIcon emoji="🔖" color={color} />
          ),
          headerTitle: 'Saved',
        }}
      />
    </Tabs>
  );
}

function TabIcon({ emoji, color }: { emoji: string; color: string }) {
  const { Text } = require('react-native');
  return <Text style={{ fontSize: 20, opacity: color === Colors.scarlet ? 1 : 0.5 }}>{emoji}</Text>;
}
