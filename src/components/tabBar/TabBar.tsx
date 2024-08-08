import { View } from 'react-native';
import { TabBarButton } from './TabBarButton';

type TabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

type Route = {
  key: string;
  name: string;
  params?: any;
};

export function TabBar({ state, descriptors, navigation }: TabBarProps) {
  const primaryColor = '#5DCCFC';
  const greyColor = '#000000';

  return (
    <View className="absolute bottom-7 flex-row justify-between items-center bg-white mx-6 py-5 rounded-3xl shadow-lg shadow-black">
      {state.routes.map((route: Route, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? primaryColor : greyColor}
            label={label}
          />
        );
      })}
    </View>
  );
}