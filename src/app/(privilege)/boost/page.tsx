import { Metadata } from 'next';
import BoostPage from './BoostPage';

export const metadata: Metadata = {
    title: 'Буст страниц - Talentio',
    description: 'Увеличь просмотры на своей странице, чтобы о тебе узнали больше людей!'
}

const Page = () => {
    return <BoostPage />
}

export default Page;
