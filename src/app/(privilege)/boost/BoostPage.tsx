import { fonts } from '@/shared/fonts/fonts';
import s from './Boost.module.scss';

const BoostPage = () => {
    const font = fonts.montserratAlternates;
    return (
        <div className={`container ${s.wrapper} ${font}`}>
            <h1>Бустни страницу — заяви о себе!</h1>
        </div>
    );
}

export default BoostPage;
