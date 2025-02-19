import { Metadata } from 'next';
import ResumePage from './ResumePage';

export const metadata: Metadata = {
    title: 'Ваше резюме - Talentio',
    description: 'Ваше персональное резюме. Здесь собранна подробная информация о вашем опыте, желаемой должности и зарплате, а также более структурированный вид страницы.'
}


const Page = () => {
    return <ResumePage />
}

export default Page;
