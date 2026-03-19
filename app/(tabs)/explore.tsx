import { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OSU_SPORTS, type Sport } from '@/constants/sports';
import FeedCard, { type FeedItem } from '@/components/FeedCard';

const sport = (id: string) => OSU_SPORTS.find((s) => s.id === id)!;

const MOCK_FEED: FeedItem[] = [
  { id: 'e1', athleteName: 'Jeremiah Smith', sport: sport('football'), caption: 'Game week prep. Nothing like the energy inside the Shoe.', likes: 5100 },
  { id: 'e2', athleteName: 'Jacy Sheldon', sport: sport('womens-basketball'), caption: 'Big Ten road trip — locked in.', likes: 1890 },
  { id: 'e3', athleteName: 'Kobe Yomber', sport: sport('wrestling'), caption: 'Making weight never gets easier. Worth it every time.', likes: 743 },
  { id: 'e4', athleteName: 'Mia Pavia', sport: sport('gymnastics'), caption: "Scored a 9.85 on floor today. Let's go! 🤸", likes: 4210 },
  { id: 'e5', athleteName: 'Jake Sylvester', sport: sport('baseball'), caption: 'First BP of spring. Bat feels great.', likes: 920 },
  { id: 'e6', athleteName: 'Ava Belegravdis', sport: sport('womens-soccer'), caption: "Preseason starts in 2 weeks. Can't wait.", likes: 2300 },
  { id: 'e7', athleteName: 'Connor Martin', sport: sport('mens-swim-dive'), caption: 'Morning two-a-day. 6k yards before 7am. 🏊', likes: 670 },
  { id: 'e8', athleteName: 'Lexi Torres', sport: sport('volleyball'), caption: 'Serve receive reps after practice. Consistency is everything.', likes: 1450 },
];

export default function ExploreScreen() {
  const [selected, setSelected] = useState<Sport | null>(null);

  const filtered = selected
    ? MOCK_FEED.filter((item) => item.sport.id === selected.id)
    : MOCK_FEED;

  return (
    <SafeAreaView className="flex-1 bg-osu-light-gray" edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Sport grid */}
        <View className="px-4 pt-4 pb-2">
          <Text className="text-xs font-semibold text-osu-gray uppercase tracking-widest mb-3">
            Browse by Sport
          </Text>
          <View className="flex-row flex-wrap" style={{ gap: 8 }}>
            {OSU_SPORTS.map((s) => {
              const active = selected?.id === s.id;
              return (
                <TouchableOpacity
                  key={s.id}
                  onPress={() => setSelected(active ? null : s)}
                  activeOpacity={0.75}
                  className="rounded-xl items-center justify-center"
                  style={{
                    width: '47%',
                    paddingVertical: 14,
                    backgroundColor: active ? s.color : '#FFFFFF',
                    borderWidth: 1.5,
                    borderColor: active ? s.color : '#E5E5E5',
                  }}
                >
                  <Text style={{ fontSize: 28 }}>{s.emoji}</Text>
                  <Text
                    className="text-xs font-medium mt-1 text-center px-1"
                    style={{ color: active ? '#FFFFFF' : '#333333' }}
                    numberOfLines={2}
                  >
                    {s.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Feed filtered by sport */}
        <View className="pt-2 pb-6">
          {selected && (
            <Text className="px-4 pb-2 text-xs font-semibold text-osu-gray uppercase tracking-widest">
              {selected.name} Posts
            </Text>
          )}

          {filtered.length === 0 ? (
            <View className="items-center py-12">
              <Text style={{ fontSize: 36 }}>{selected?.emoji}</Text>
              <Text className="text-gray-500 text-sm mt-3">
                No posts for {selected?.name} yet.
              </Text>
            </View>
          ) : (
            filtered.map((item) => <FeedCard key={item.id} item={item} />)
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
