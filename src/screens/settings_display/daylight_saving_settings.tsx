import {t} from '@lingui/macro';
import {HStack, FormControl, IStackProps, Switch} from 'native-base';
import {useCallback} from 'react';
import {useSettings} from '@/store/settings';

export function DaylightSavingSettings(props: IStackProps) {
  const [observeDst, setObserveDst] = useSettings('OBSERVE_DST');

  const onToggle = useCallback(
    (value: boolean) => {
      setObserveDst(value);
    },
    [setObserveDst],
  );

  return (
    <HStack {...props}>
      <FormControl fontSize="md">
        <HStack justifyContent={'space-between'}>
          <FormControl.Label
            flexShrink={1}>{t`Daylight Saving Time`}</FormControl.Label>
          <Switch value={observeDst} onToggle={onToggle} size="lg" />
        </HStack>
        <FormControl.HelperText>
          {t`Follow Daylight Saving Time (DST) automatically. Disable if your region does not observe DST or if your device clock is out of sync.`}
        </FormControl.HelperText>
      </FormControl>
    </HStack>
  );
}
