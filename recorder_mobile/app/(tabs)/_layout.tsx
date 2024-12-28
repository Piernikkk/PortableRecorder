import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import React from 'react';

import { TabBar } from '@/lib/components/TabBar';
import { TabButton } from '@/lib/components/TabBar/TabButton';
import { IconLayoutGrid, IconMicrophone } from '@tabler/icons-react-native';

export default function TabLayout() {

  return (
    <>
      <Tabs>
        <TabSlot />
        <TabList asChild>
          <TabBar>
            <TabTrigger name="(main)" href="/" style={{ flex: 1 }} asChild>
              <TabButton
                icon={IconMicrophone}
                label='Record'
              />
            </TabTrigger>
            <TabTrigger name="library" href="/library" style={{ flex: 1 }} asChild>
              <TabButton
                icon={IconLayoutGrid}
                label='Library'
              />
            </TabTrigger>
          </TabBar>
        </TabList>
      </Tabs>
      {/* <Miniplayer /> */}
      {/* <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
          animation: 'shift',
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconHome color={color} />,
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: 'Library',
            tabBarIcon: ({ color }) => <IconLayoutGrid color={color} />,
          }}
        />
        <Tabs.Screen
          name="downloads"
          options={{
            title: 'Downloads',
            tabBarIcon: ({ color }) => <IconCircleArrowDown color={color} />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => <IconSearch color={color} />,
          }}
        />
      </Tabs> */}
    </>
  );
}
