import { View, Text } from 'react-native';

export default function SavedScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-osu-light-gray">
      <Text className="text-2xl mb-2">🔖</Text>
      <Text className="text-lg font-semibold text-gray-800">No saved content yet</Text>
      <Text className="text-sm text-osu-gray mt-1">Content you save will appear here.</Text>
    </View>
  );
}
