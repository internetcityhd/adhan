import {Text, Pressable, HStack, Box} from 'native-base';
import {memo} from 'react';
import {push} from '@/navigation/root_navigation';
import {RootStackParamList, translateRoute} from '@/navigation/types';

type ScreenListItem = {
  name: keyof RootStackParamList;
  icon: typeof Text;
};

type SettingsListItemOptions = {
  item: ScreenListItem;
};

function SettingsListItem({item}: SettingsListItemOptions): React.JSX.Element {
  return (
    <Pressable onPress={() => push(item.name)} mx="3" mb="2">
      {({isPressed}) => {
        return (
          <HStack
            borderRadius="lg"
            px="3"
            py="3"
            alignItems="center"
            bg={
              isPressed
                ? {
                    _light: 'coolGray.200',
                    _dark: 'coolGray.700',
                  }
                : {
                    _light: 'white',
                    _dark: 'coolGray.800',
                  }
            }
            shadow="1">
            <Box
              bg={{_light: 'cyan.100', _dark: 'cyan.900'}}
              borderRadius="md"
              p="1.5"
              mr="3">
              <item.icon size="xl" color={{_light: 'cyan.700', _dark: 'cyan.300'}} />
            </Box>
            <Text flex={1} flexWrap="wrap" fontWeight="medium">
              {translateRoute(item.name)}
            </Text>
            <Text color="muted.400" fontSize="lg">›</Text>
          </HStack>
        );
      }}
    </Pressable>
  );
}

export default memo(SettingsListItem);
