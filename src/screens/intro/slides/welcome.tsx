import {t} from '@lingui/macro';
import {Box, Divider, HStack, Stack, Text, VStack} from 'native-base';
import {ImportSettings} from '@/screens/settings_backup/import_settings';
import {LanguageSettings} from '@/screens/settings_display/language_settings';

export function WelcomeSlide() {
  return (
    <VStack flex={1} p="4">
      {/* Tagline card */}
      <Box
        bg={{_light: 'cyan.50', _dark: 'coolGray.800'}}
        borderRadius="2xl"
        p="5"
        mb="5"
        borderLeftWidth={4}
        borderLeftColor="cyan.500">
        <Text fontSize="xl" fontWeight="bold" mb="1">
          {t`Assalamu Alaikum 🌙`}
        </Text>
        <Text color={{_light: 'coolGray.600', _dark: 'coolGray.300'}}>
          {t`Thanks for choosing this app! Let's set it up so you can start getting accurate prayer times.`}
        </Text>
      </Box>

      {/* Steps overview */}
      <HStack mb="4" space="3" flexWrap="wrap">
        {[
          {step: '1', label: t`Language`},
          {step: '2', label: t`Location`},
          {step: '3', label: t`Calculation`},
          {step: '4', label: t`Notifications`},
        ].map(({step, label}) => (
          <HStack
            key={step}
            alignItems="center"
            bg={{_light: 'white', _dark: 'coolGray.700'}}
            borderRadius="lg"
            px="3"
            py="1.5"
            mb="2"
            shadow="1">
            <Box
              bg="cyan.500"
              borderRadius="full"
              w="5"
              h="5"
              alignItems="center"
              justifyContent="center"
              mr="1.5">
              <Text fontSize="xs" color="white" fontWeight="bold">
                {step}
              </Text>
            </Box>
            <Text fontSize="sm">{label}</Text>
          </HStack>
        ))}
      </HStack>

      <Divider mb="4" />

      <LanguageSettings mb="4" />

      <Stack>
        <Text
          mb="1"
          fontSize="sm"
          color={{_light: 'coolGray.600', _dark: 'coolGray.400'}}>
          {t`Already have a backup? Import it to skip setup`}:
        </Text>
        <ImportSettings />
      </Stack>
    </VStack>
  );
}
