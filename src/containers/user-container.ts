import {useState, useEffect} from 'react';
import {createContainer} from 'unstated-next';
import {useLayoutObservable} from 'observable-hooks';
import {switchMap, mapTo, startWith} from 'rxjs/operators';
import {from, of} from 'rxjs';

const useUser = () => {
  // const [user, setUser] = useObservableState(from(of(1)), null);

  const user$ = useLayoutObservable(() => of(1));

  return {user$};
};

export const UserContainer = createContainer(useUser);
