import {Text, Box, VStack} from 'native-base';
import {PropsWithChildren} from 'react';

export function IntroItem({
  item,
}: {
  item: PropsWithChildren<{title: () => string}>;
}) {
  return (
    <VStack flex={1}>
      {/* Accent header bar */}
      <Box
        bg={{_light: 'cyan.500', _dark: 'cyan.700'}}
        pt="8"
        pb="6"
        px="6"
        alignItems="center">
        <Text
          py="1"
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          letterSpacing="lg">
          {item.title()}
        </Text>
      </Box>
      {/* Slide content */}
      <Box flex={1} mt="2">
        {item.children}
      </Box>
    </VStack>
  );
}
