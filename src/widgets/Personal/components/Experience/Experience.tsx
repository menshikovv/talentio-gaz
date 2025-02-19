import { useSettings } from '@/shared/context/SettingsContext';
import s from './Experience.module.scss';
import { handleOpacity } from '../../lib/handleCustom';
import { useUserData } from '@/shared/hooks/useUserData';
import { NotFoundText } from '@/shared/ui/NotFoundText/NotFoundText';
import { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { EditLogo } from '@/shared/ui/EditLogo/EditLogo';

export const Experience = () => {
    const { opacity, radius , isBlurBlocks, colorFont } = useSettings();
    const { experienceFields } = useUserData();
    const [isModal, setIsModal] = useState(false);

    const visibleExperiences = experienceFields.slice(0, 1);
    
    return (
        <div className={s.wrapper} style={{backgroundColor: `rgba(194, 194, 194, ${handleOpacity(opacity)})`, borderRadius: `${radius}px`, backdropFilter: isBlurBlocks ? 'blur(10px)' : 'none'}}>
            <h2 className={s.title} style={{color: colorFont}}>Опыт работы:</h2>
            <div className={s.editLogo}><EditLogo /></div>
            {experienceFields.length > 0 ? visibleExperiences.map((exp: any, index: number) => {
                const endDate = !exp.isCurrent ? `${exp.endDateMonth} ${exp.endDateYear}` : 'По настоящее время';
                return (
                    <ul className={s.experiences} key={`experiences-${index}`} style={{color: colorFont}}>
                        <li className={s.experience} key={`nameJob-${index}`}><span>Компания:</span> {exp.name}</li>
                        <li className={s.experience} key={`jobTitle-${index}`}><span>Должность:</span> {exp.job_title}</li>
                        <li className={s.experience} key={`timeJob-${index}`}><span>Время работы:</span> {exp.startDateMonth} {exp.startDateYear} - {endDate}</li>
                    </ul>
                )
            }) : <div style={{display: 'flex', justifyContent: 'center',  alignItems: 'center', margin: '5px 0px'}}><NotFoundText text={'Отсутствует'}/></div>}
             {experienceFields.length > 2 && (
                <>
                    <div className={s.showMore}>
                        <button onClick={() => setIsModal(true)} style={{color: colorFont}}>Показать еще...</button>
                    </div>
                    {isModal && <ModalWindow type='experience' data={experienceFields} onClose={() => setIsModal(false)}/>}
                </>
             )}
        </div>
    );
}