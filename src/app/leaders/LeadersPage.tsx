import { fonts } from '@/shared/fonts/fonts';
import s from './LeadersPage.module.scss';

const LeadersPage = () => {
    const font = fonts.montserratAlternates;
    return (
        <div className={`container ${s.wrapper} ${font}`}>
            <h1>Лучшие в Talentio. Попади и ты сюда.</h1>
        </div>
    );
}

export default LeadersPage;
