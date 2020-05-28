import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';

const useUser = ({redirectTo = '', redirectIfFound = false}) => {
    const { data: user, mutate: mutateUser } = useSWR('/api/user');

    useEffect(() => {
        if (!redirectTo || !user) return;

        if ((redirectTo && !redirectIfFound && !user?.isLoggedIn) || (redirectIfFound && user?.isLoggedIn)) {
            Router.push(redirectTo).catch(error => console.error(error));
        }
    }, [user, redirectIfFound, redirectTo]);

    return { user, mutateUser };
}

export default useUser;
