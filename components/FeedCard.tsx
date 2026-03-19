import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SportBadge from './SportBadge';
import type { Sport } from '@/constants/sports';

export type FeedItem = {
  id: string;
  athleteName: string;
  sport: Sport;
  caption: string;
  likes: number;
};

type Props = {
  item: FeedItem;
};

export default function FeedCard({ item }: Props) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item.likes);

  function handleLike() {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  }

  const initials = item.athleteName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <View className="bg-white mx-4 my-2 rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <View className="flex-row items-center px-4 pt-4 pb-3">
        {/* Avatar */}
        <View className="w-10 h-10 rounded-full bg-scarlet items-center justify-center mr-3">
          <Text className="text-white font-bold text-sm">{initials}</Text>
        </View>
        {/* Name + badge */}
        <View className="flex-1">
          <Text className="font-semibold text-gray-900 text-sm">{item.athleteName}</Text>
          <View className="mt-0.5">
            <SportBadge sport={item.sport} />
          </View>
        </View>
      </View>

      {/* Thumbnail placeholder */}
      <View className="h-52 bg-osu-light-gray items-center justify-center">
        <Text style={{ fontSize: 40 }}>{item.sport.emoji}</Text>
      </View>

      {/* Footer */}
      <View className="px-4 py-3">
        <Text className="text-gray-800 text-sm leading-5 mb-3">{item.caption}</Text>
        <TouchableOpacity
          onPress={handleLike}
          className="flex-row items-center"
          activeOpacity={0.7}
        >
          <Text style={{ fontSize: 18 }}>{liked ? '❤️' : '🤍'}</Text>
          <Text className={`ml-1.5 text-sm font-medium ${liked ? 'text-scarlet' : 'text-osu-gray'}`}>
            {likeCount.toLocaleString()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
