import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedCard, { type FeedItem } from '@/components/FeedCard';
import { OSU_SPORTS } from '@/constants/sports';

const sport = (id: string) => OSU_SPORTS.find((s) => s.id === id)!;

const MOCK_FEED: FeedItem[] = [
  {
    id: '1',
    athleteName: 'Jeremiah Smith',
    sport: sport('football'),
    caption: 'Morning route work before the rest of the team shows up. Gotta be the first one in. 🏈',
    likes: 4821,
  },
  {
    id: '2',
    athleteName: 'Jacy Sheldon',
    sport: sport('womens-basketball'),
    caption: 'Film session with the squad. Every detail matters. Chase the O.',
    likes: 2103,
  },
  {
    id: '3',
    athleteName: 'Kobe Yomber',
    sport: sport('wrestling'),
    caption: 'Week 1 of winter training is a wrap. No shortcuts, no excuses. 💪',
    likes: 987,
  },
  {
    id: '4',
    athleteName: 'Mia Pavia',
    sport: sport('gymnastics'),
    caption: 'Landed my beam routine clean today for the first time this season. Hard work paying off.',
    likes: 3456,
  },
  {
    id: '5',
    athleteName: 'Jake Sylvester',
    sport: sport('baseball'),
    caption: 'Bullpen session at Bill Davis. Velocity up 3 mph from last fall. Season cannot come soon enough.',
    likes: 1234,
  },
  {
    id: '6',
    athleteName: 'Ava Belegravdis',
    sport: sport('womens-soccer'),
    caption: 'Recovery day looks like this ☀️ Grateful for days like today.',
    likes: 2678,
  },
];

export default function FeedScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black" edges={['bottom']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {MOCK_FEED.map((item) => (
          <FeedCard key={item.id} item={item} />
        ))}

        <View className="items-center mt-4">
          <Text style={{ color: '#555555' }} className="text-xs">You're all caught up ✓</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
