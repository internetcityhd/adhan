import {Text, Box, ITextProps} from 'native-base';

export function StepLabel({label, ...textProps}: ITextProps & {label: string}) {
  return (
    <Box
      bg="cyan.500"
      borderRadius="full"
      px="4"
      py="2"
      _dark={{bg: 'cyan.700'}}>
      <Text color="white" fontWeight="semibold" fontSize="sm" {...textProps}>
        {label}
      </Text>
    </Box>
  );
}
