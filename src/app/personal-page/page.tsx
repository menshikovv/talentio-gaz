import React from 'react';
import PersonalPage from './PersonalPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ваша страница - Talentio',
    description: 'Ваша персональная страница. Здесь собранна ваша информация о стеке, проектах, образовании и т.д. Также вы можете менять внешний вид вашей страницы, как вам хочется'
}

const Page = () => {
    return <PersonalPage />
}

export default Page;
