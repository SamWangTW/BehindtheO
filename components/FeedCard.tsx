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
    <View style={{ backgroundColor: '#000000', borderBottomWidth: 0.5, borderBottomColor: '#222222' }}>
      {/* Header */}
      <View className="flex-row items-center px-4 pt-4 pb-3">
        {/* Avatar */}
        <View className="w-10 h-10 rounded-full bg-scarlet items-center justify-center mr-3">
          <Text className="text-white font-bold text-sm">{initials}</Text>
        </View>
        {/* Name + badge */}
        <View className="flex-1">
          <Text className="font-semibold text-sm" style={{ color: '#FFFFFF' }}>{item.athleteName}</Text>
          <View className="mt-0.5">
            <SportBadge sport={item.sport} />
          </View>
        </View>
      </View>

      {/* Thumbnail placeholder */}
      <View className="h-52 items-center justify-center" style={{ backgroundColor: '#111111' }}>
        <Text style={{ fontSize: 40 }}>{item.sport.emoji}</Text>
      </View>

      {/* Footer */}
      <View className="px-4 py-3">
        <Text className="text-sm leading-5 mb-3" style={{ color: '#FFFFFF' }}>{item.caption}</Text>
        <TouchableOpacity
          onPress={handleLike}
          className="flex-row items-center"
          activeOpacity={0.7}
        >
          <Text style={{ fontSize: 18 }}>{liked ? '❤️' : '🤍'}</Text>
          <Text className="ml-1.5 text-sm font-medium" style={{ color: liked ? '#BB0000' : '#888888' }}>
            {likeCount.toLocaleString()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
