import { useSettings } from '@/shared/context/SettingsContext';
import s from './Languages.module.scss';
import { handleOpacity } from '../../lib/handleCustom';
import { useUserData } from '@/shared/hooks/useUserData';
import { LANGUAGES } from '@/shared/constants/languages';
import Image from 'next/image';
import { NotFoundText } from '@/shared/ui/NotFoundText/NotFoundText';
import { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { EditLogo } from '@/shared/ui/EditLogo/EditLogo';

export const Languages = () => {
    const { opacity, radius, isBlurBlocks, colorFont } = useSettings();
    const { languageValue } = useUserData();
    const [isModal, setIsModal] = useState(false);

    const visibleLanguages = languageValue.slice(0, 3);

    return (
        <div className={s.wrapper} style={{backgroundColor: `rgba(194, 194, 194, ${handleOpacity(opacity)})`, borderRadius: `${radius}px`, backdropFilter: isBlurBlocks ? 'blur(10px)' : 'none'}}>
            <h2 className={s.title} style={{color: colorFont}}>Владею языками:</h2>
            <div className={s.editLogo}><EditLogo /></div>
            <ul style={{color: colorFont}}>
                {languageValue.length > 0 ? visibleLanguages.map((lang: any, index: number) => {
                    const languageData = LANGUAGES.find(l => l.label === lang.name);
                    return ( 
                        <li key={index} className={s.language}>
                            {languageData?.logo && <Image src={languageData.logo} alt={`${lang.name} flag`} className={s.flag}/>}
                            {lang.name} - {lang.level}
                        </li>
                    )
                }) : <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NotFoundText text={'Отсутствуют'}/></div>}
            </ul>
            {languageValue.length > 3 && (
                <>
                    <div className={s.showMore}>
                        <button onClick={() => setIsModal(true)}>Показать еще...</button>
                    </div>
                    {isModal && <ModalWindow type='languages' data={languageValue} onClose={() => setIsModal(false)}/>}
                </>
            )}
        </div>
    );
}