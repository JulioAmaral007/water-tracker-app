import { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { icons } from '../../constants/icons';

type TabBarButtonProps = {
  isFocused: boolean;
  label: string;
  routeName: string;
  color: string;
  onPress?: () => void;
  onLongPress?: () => void;
};

export function TabBarButton({
  isFocused,
  label,
  routeName,
  color,
  onPress,
  onLongPress,
  ...props
}: TabBarButtonProps) {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, {
      duration: 350,
    });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);
    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });
  return (
    <Pressable
      {...props}
      onPress={onPress}
      onLongPress={onLongPress}
      className="flex-1 justify-center items-center gap-1"
    >
      <Animated.View style={[animatedIconStyle]}>
        {icons[routeName as keyof typeof icons]({
          color,
        })}
      </Animated.View>

      <Animated.Text
        style={[
          {
            color,
            fontSize: 11,
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
}
