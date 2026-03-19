import { View, Text } from 'react-native';
import type { Sport } from '@/constants/sports';

type Props = {
  sport: Sport;
};

export default function SportBadge({ sport }: Props) {
  return (
    <View
      className="flex-row items-center rounded-full px-2 py-0.5"
      style={{ backgroundColor: sport.color + '20' }}
    >
      <Text style={{ fontSize: 11 }}>{sport.emoji}</Text>
      <Text
        className="text-xs font-medium ml-1"
        style={{ color: sport.color }}
        numberOfLines={1}
      >
        {sport.name}
      </Text>
    </View>
  );
}
