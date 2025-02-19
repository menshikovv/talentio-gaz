'use client'

import { useUserData } from '@/shared/hooks/useUserData';
import s from './ResumePage.module.scss';
import Link from 'next/link';
import { ROUTES } from '@/shared/config/router.config';
import { Contacts } from '@/widgets/Resume/Aside/Contacts/Contacts';
import { Human } from '@/widgets/Resume/Aside/Human/Human';
import { useSettings } from '@/shared/context/SettingsContext';
import { fonts } from '@/shared/fonts/fonts';
import { Languages } from '@/widgets/Resume/Aside/Languages/Languages';
import { Skills } from '@/widgets/Resume/Aside/Skills/Skills';
import { Projects } from '@/widgets/Resume/Aside/Projects/Projects';
import { Experience } from '@/widgets/Resume/Main/Experience/Experience';
import { Education } from '@/widgets/Resume/Main/Education/Education';
import { About } from '@/widgets/Resume/Main/About/About';
import { SettingsIcon } from '@/shared/ui/SettingsIcon/SettingsIcon';
import { ShareIcon } from '@/shared/ui/ShareIcon/ShareIcon';
import { AiIcon } from '@/shared/ui/AiIcon/AiIcon';

const ResumePage = () => {
    const { experienceFields, languageValue, projectValue } = useUserData();

    const { font } = useSettings();
    const fontClass = fonts[font] || fonts.montserratAlternates;
    
    return (
        <div className={`${fontClass} containerResume`}>
            <Link href={ROUTES.PERSONAL_PAGE} className={s.modResume}>Переключить режим</Link>
            <div className={s.buttons}>
                <SettingsIcon />
                <ShareIcon />
                <AiIcon />
            </div>
            <div className={s.resume}>
                <aside className={`${s.aside} containerAsideResume`}>
                    <Human />
                    <Contacts />
                    {languageValue.length > 0 && <Languages />}
                    <Skills />
                    {projectValue.length > 0 && <Projects />}
                </aside>
                <main className={`${s.main} containerMainResume`}>
                    {experienceFields.length > 0 && <Experience />}
                    <Education />
                    <About />
                </main>
            </div>
        </div>
    );
}

export default ResumePage;
