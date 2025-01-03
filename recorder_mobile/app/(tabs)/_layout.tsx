import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import React from 'react';

import { TabBar } from '@/lib/components/TabBar';
import { TabButton } from '@/lib/components/TabBar/TabButton';
import { IconLayoutGrid, IconMicrophone, IconSettings } from '@tabler/icons-react-native';

export default function TabLayout() {

  return (
    <>
      <Tabs>
        <TabSlot />
        <TabList asChild>
          <TabBar>
            <TabTrigger name="library" href="/library" style={{ flex: 1 }} asChild>
              <TabButton
                icon={IconLayoutGrid}
                label='Library'
              />
            </TabTrigger>
            <TabTrigger name="(main)" href="/" style={{ flex: 1 }} asChild>
              <TabButton
                icon={IconMicrophone}
                label='Record'
              />
            </TabTrigger>
            <TabTrigger name="settings" href="/settings" style={{ flex: 1 }} asChild>
              <TabButton
                icon={IconSettings}
                label='Settings'
              />
            </TabTrigger>
          </TabBar>
        </TabList>
      </Tabs>
    </>
  );
}
