import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-screen">
      <View className="w-full flex justify-center items-center h-full px-7 bg-background-primary">
        <Text className="text-xl text-text-primary mt-7 text-center">
          Onde Criatividade Encontra Inovação: Inicie sua Jornada com a Wave
        </Text>
      </View>
    </SafeAreaView>
  );
};
