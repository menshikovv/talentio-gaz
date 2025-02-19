import { useSettings } from '@/shared/context/SettingsContext';
import s from './Education.module.scss';
import { handleOpacity } from '../../lib/handleCustom';
import { useUserData } from '@/shared/hooks/useUserData';
import { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { EditLogo } from '@/shared/ui/EditLogo/EditLogo';

export const Education = () => {
    const { opacity, radius , isBlurBlocks, colorFont } = useSettings();
    const { educationValue } = useUserData();
    const [isModal, setIsModal] = useState(false);

    const visibleEducation = educationValue.slice(0, 2);

    return (
        <div className={s.wrapper} style={{backgroundColor: `rgba(194, 194, 194, ${handleOpacity(opacity)})`, borderRadius: `${radius}px`, backdropFilter: isBlurBlocks ? 'blur(10px)' : 'none'}}>
            <h2 className={s.title} style={{color: colorFont}}>Образование:</h2>
            <div className={s.editLogo}><EditLogo /></div>
                {visibleEducation.map((educ: any, index: number) => (
                    <ul className={s.educations} key={`education-${index}`} style={{color: colorFont}}>
                        <li key={`level-${index}`}>{educ.level}</li>
                        <li key={`nameSchool=${index}`} className={s.education}><span>Учебное заведение:</span> {educ.nameSchool}</li>
                        {educ.specialization !== '-' && <li key={`specialization-${index}`} className={s.education}><span>Специальность:</span> {educ.specialization}</li>}
                        <li key={`yearEnd-${index}`} className={s.education}><span>Год окончания:</span> {educ.yearEnd}</li>
                    </ul>
                ))}
                {educationValue.length > 2 && (
                    <>
                        <div className={s.showMore}>
                            <button onClick={() => setIsModal(true)} style={{color: colorFont}}>Показать еще...</button>
                        </div>
                        {isModal && <ModalWindow type='education' data={educationValue} onClose={() => setIsModal(false)}/>}
                    </>
                )}
        </div>
    );
}