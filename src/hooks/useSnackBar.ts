import React, {useCallback} from 'react';
import {useToast, Alert} from 'native-base';

export const useSnackBar = () => {
  const toast = useToast();

  const showSnack = useCallback(
    ({message}: {message?: string}) => {
      toast.show({
        duration: 2000,
        title: message ?? 'エラーが起きました',
        status: 'error',
      });
    },
    [toast],
  );

  return {showSnack};
};
