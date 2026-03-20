import { Tabs } from 'expo-router';
import Svg, { Circle, Line, Polygon, Rect, Path } from 'react-native-svg';

function BehindIcon({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={9} stroke={color} strokeWidth={2} />
      <Polygon points="10,8.5 10,15.5 16,12" fill={color} />
    </Svg>
  );
}

function ExploreIcon({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Circle cx={10} cy={10} r={6} stroke={color} strokeWidth={2} />
      <Line x1={14.5} y1={14.5} x2={20} y2={20} stroke={color} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

function SavedIcon({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 3 H19 V21 L12 16 L5 21 Z"
        stroke={color}
        strokeWidth={2}
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#BB0000',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#111111',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 11,
        },
        headerStyle: { backgroundColor: '#BB0000' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Behind',
          headerShown: false,
          tabBarIcon: ({ color }) => <BehindIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <ExploreIcon color={color} />,
          headerTitle: 'Explore Sports',
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color }) => <SavedIcon color={color} />,
          headerTitle: 'Saved',
        }}
      />
    </Tabs>
  );
}
