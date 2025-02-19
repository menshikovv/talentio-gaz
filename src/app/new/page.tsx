import React from 'react';
import ClientPage from './ClientPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Создание страницы - Talentio',
    description: 'Создайте страницу, добавьте информацию о себе, своих навыках и проектах.',
}

const Page = () => {
    return <ClientPage />
}

export default Page;