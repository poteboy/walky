import React, {FC} from 'react';
import styled from 'styled-components/native';
// import AppleHealthKit, {
//   HealthValue,
//   HealthKitPermissions,
// } from 'react-native-health';

// /* Permission options */
// const permissions = {
//   permissions: {
//     read: [AppleHealthKit.Constants.Permissions.HeartRate],
//     write: [AppleHealthKit.Constants.Permissions.Steps],
//   },
// } as HealthKitPermissions;

// AppleHealthKit.initHealthKit(permissions, (error: string) => {
//   /* Called after we receive a response from the system */

//   if (error) {
//     console.log('[ERROR] Cannot grant permissions!');
//   }

//   /* Can now read or write to HealthKit */

//   const options = {
//     startDate: new Date(2020, 1, 1).toISOString(),
//   };

//   AppleHealthKit.getHeartRateSamples(
//     options,
//     (callbackError: string, results: HealthValue[]) => {
//       /* Samples are now collected from HealthKit */
//     },
//   );
// });

const ScreenComponent: FC = () => {
  return (
    <Wrapper>
      <TestText>test success!</TestText>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: auto;
  justify-content: center;
`;

const TestText = styled.Text`
  margin: auto;
`;

export default ScreenComponent;
