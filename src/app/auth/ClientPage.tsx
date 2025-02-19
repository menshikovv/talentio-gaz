'use client'

import { Input } from '@heroui/react';
import { Controller, useFormContext } from 'react-hook-form';
import s from './ClientPage.module.scss';
import { InputPassword } from '@/shared/ui/InputPassword/InputPassword';
import { useState } from 'react';
import Image from 'next/image';
import AuthButton from '@/shared/ui/AuthButton/AuthButton';
import { fonts } from '@/shared/fonts/fonts';

const ClientPage = () => {
    const { control, handleSubmit } = useFormContext();
    const [type, setType] = useState<string>('login');

    const onSubmit = (data: any) => console.log(data);
    const font = fonts.montserratAlternates;
    

    return (
        <div className={`${s.wrapper} ${font}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.content}>
                    <h1 className='text-xl'>{type === 'login' ? 'Вход' : 'Регистрация'}</h1>
                    {type === 'login' && (
                        <Controller 
                            control={control}
                            name='userName'
                            render={({ field }) => <Input {...field} className="mb-5" label="Никнейм или почта" type='text' isRequired variant='underlined'/>}
                        />
                    )}
                    {type === 'register' && (
                        <>
                        <Controller 
                            control={control}
                            name='userNickname'
                            render={({ field }) => <Input {...field} className="mb-5" label="Никнейм" type="text" isRequired variant='underlined'/>}
                        />
                        <Controller 
                            control={control}
                            name='userEmail'
                            render={({ field }) => <Input {...field} className="mb-5" label="Почта" type='email' isRequired variant='underlined'/>}
                        />
                        </>
                    )}
                    <Controller 
                        control={control}
                        name='userPassword'
                        render={({ field }) => <div className="mb-5"><InputPassword {...field} /></div>}
                    />
                    {type === 'login' ? (
                        <p >Нет аккаунта? <a href="#" onClick={(e) => { e.preventDefault(); setType('register'); }}>Создайте</a></p>
                    ) : (
                        <p>Уже зарегистрированы? <a href="#" onClick={(e) => { e.preventDefault(); setType('login'); }}>Войдите</a></p>
                    )}
                    <AuthButton type={type} />
                    <div className='flex justify-around mt-5'>
                        <div className='flex'>
                            <button>Google</button>
                            <Image src='/assets/logos-services/google.svg' width={30} height={30} alt='google' className='ml-3' />
                        </div>
                        <div className='flex'>
                            <button>GitHub</button>
                            <Image src='/assets/logos-services/github.svg' width={30} height={30} alt='google' className='ml-3'/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ClientPage;
