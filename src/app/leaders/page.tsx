import React from 'react';
import LeadersPage from './LeadersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Таблица лидеров - Talentio',
    description: 'На этой странице представлена таблица, показывающая первых 100 лидеров в Talentio'
}

const Page = () => {
    return <LeadersPage />
}

export default Page;
