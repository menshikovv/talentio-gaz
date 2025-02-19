'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import { ROUTES } from '@/shared/config/router.config';

const AuthButton = ({ type }: { type: string }) => {
    const router = useRouter();

    const handleClick = () => {
        if (type === 'login') {
            router.push(ROUTES.NEW);
        } else {
            router.push(ROUTES.VERIFY_EMAIL);
        }
    };

    return (
        <Button 
            style={{ background: 'linear-gradient(to top right, #6b46c1, #4299e1)', color: 'white', marginTop: 3}}
            radius="sm" 
            onPress={handleClick}
        >
            {type === 'login' ? 'Войти в Talentio' : 'Создать'}
        </Button>
    );
};

export default AuthButton;
