import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {
  return (
    <>
      <StatusBar backgroundColor="#121212" style="light" />
      
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#0091EA",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#121212",
            borderTopWidth: 1,
            borderTopColor: "#121212",
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
}