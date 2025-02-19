import { useSettings } from '@/shared/context/SettingsContext';
import s from './Projects.module.scss';
import { handleOpacity } from '../../lib/handleCustom';
import { useUserData } from '@/shared/hooks/useUserData';
import { NotFoundText } from '@/shared/ui/NotFoundText/NotFoundText';
import { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { EditLogo } from '@/shared/ui/EditLogo/EditLogo';

export const Projects = () => {
    const { opacity, radius , isBlurBlocks, colorFont } = useSettings();
    const { projectValue } = useUserData();
    const [isModal, setIsModal] = useState(false);

    const visibleProjects = projectValue.slice(0, 5);

    return (
        <div className={s.wrapper} style={{backgroundColor: `rgba(194, 194, 194, ${handleOpacity(opacity)})`, borderRadius: `${radius}px`, backdropFilter: isBlurBlocks ? 'blur(10px)' : 'none'}}>
            <h2 className={s.title} style={{color: colorFont}}>Мои проекты:</h2>
            <div className={s.editLogo}><EditLogo /></div>
            {projectValue.length > 0 ? visibleProjects.map((proj: any, index: number) => (
                <ul className={s.projects} key={`projects-${index}`}>
                    <li key={`project-${index}`} className={s.project}><a href={proj.link} target="_blank" rel="noopener noreferrer" style={{color: colorFont}}>{proj.name}</a></li>
                </ul>
            )) : <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><NotFoundText text={'Отсутствуют'}/></div>}
            {projectValue.length > 5 && (
                <>
                <div className={s.showMore}>
                    <button onClick={() => setIsModal(true)}>Показать еще...</button>
                </div>
                    {isModal && <ModalWindow type='project' data={projectValue} onClose={() => setIsModal(false)}/>}
                </>
            )}
        </div>
    );
}