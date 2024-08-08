import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { TabBar } from '../../components/tabBar/TabBar';

export default function TabLayout() {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />

      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="analysis"
          options={{
            headerShown: false,
            title: 'Explore',
          }}
        />
        <Tabs.Screen
          name="alarm"
          options={{
            headerShown: false,
            title: 'Alarm',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: 'Profile',
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            headerShown: false,
            title: 'Settings',
          }}
        />
      </Tabs>
    </>
  );
}
