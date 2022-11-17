import {useSelector} from 'react-redux';

export function useAuth() {
    const {email, name, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        name,
        email,
        token,
        id,
    };
}