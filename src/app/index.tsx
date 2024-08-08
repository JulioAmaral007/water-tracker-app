import { images } from '@/constants';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft
} from 'react-native-reanimated';

const onboardingSteps = [
  {
    icon: images.screen1,
    title: 'Acompanhe sua ingestão diária de água conosco.',
    description: 'Alcance seus objetivos de hidratação com um simples toque!',
  },
  {
    icon: images.screen2,
    title: 'Lembretes inteligentes feitos sob medida para você',
    description: 'Rápido e fácil de definir sua meta de hidratação e, em seguida, acompanhar o progresso da ingestão diária de água.',
  },
  {
    icon: images.screen3,
    title: 'Fácil de usar – Beba, Toque, Repita',
    description:
      'Manter-se hidratado todos os dias é fácil com o Drops Water Tracker.',
  },
];

export default function index() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.push('/home');
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView className='flex-1 justify-center bg-white'>
      <GestureDetector gesture={swipes}>
        <View className='flex-1 p-6' key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Image source={data.icon} className='w-[300px] h-[300px] mt-36 m-6 self-center' />
          </Animated.View>

          <View className='mt-auto'>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              className='text-zinc-950 text-3xl my-3'
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(50)}
              exiting={SlideOutLeft}
              className='text-zinc-300 text-xl'
            >
              {data.description}
            </Animated.Text>

            <View className='mt-6 flex-row items-center gap-6'>
              <Text onPress={endOnboarding} className='px-7 p-4 text-lg text-zinc-950'>
                Skip
              </Text>

              <Pressable onPress={onContinue} className='rounded-xl items-center flex-1 bg-blue-200'>
                <Text className='px-7 p-4 text-lg text-zinc-950'>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}