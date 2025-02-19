'use client'

import { ModalSettings } from '@/features/ModalSettings/ModalSettings';
import { useEffect, useState } from 'react';
import JSConfetti from 'js-confetti';
import '@/styles/globals.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/ThemeSwitcher';
import { Header, Education, Languages, Projects, Stack } from '@/widgets/Personal/components';
import { Experience } from '@/widgets/Personal/components/Experience/Experience';
import s from './PersonalPage.module.scss';
import Link from 'next/link';
import { ROUTES } from '@/shared/config/router.config';
import { useSettings } from '@/shared/context/SettingsContext';
import { fonts } from '@/shared/fonts/fonts';

const PersonalPage = () => {
    const [showSettings, setShowSettings] = useState(false);
    const { font } = useSettings();
    const fontClass = fonts[font] || fonts.montserratAlternates;

    useEffect(() => {
        const hasSeenConfetti = localStorage.getItem('confettiShown');

        if (!hasSeenConfetti) {
            const confetti = new JSConfetti();
            confetti.addConfetti();
            localStorage.setItem('confettiShown', 'true');
        }
    }, []);

    return (
            <ThemeSwitcher>
                <div className='container'>
                    <Link href={ROUTES.RESUME} className={s.modResume}>Переключить режим</Link>
                    <div className={fontClass}>
                        <div style={{display: 'flex'}}>
                            <Header showSettings={showSettings} setShowSettings={setShowSettings}/>
                            <Languages />
                        </div>
                        <div style={{display: 'flex'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <Stack />
                                <Experience />
                            </div>
                            <Education />
                            <Projects />
                        </div>
                    </div>
                    {showSettings && <ModalSettings onClose={() => setShowSettings(false)} isOpen={showSettings}/>}
                </div>
            </ThemeSwitcher>
    );
}

export default PersonalPage;