import { Progress } from '@heroui/react';
import s from './Languages.module.scss';
import { useUserData } from '@/shared/hooks/useUserData';
import { LANGUAGES } from '@/shared/constants/languages';
import Image from 'next/image';
import { LEVEL_PROGRESS } from '@/shared/constants/languagesLevel';

export const Languages = () => {
    const { languageValue } = useUserData();
    return (
        <>
            <h1 className='titleResumeAside'>ЯЗЫКИ</h1>
            <div className={s.languages}>
                {languageValue.map((lang: any) => {
                    const languageData = LANGUAGES.find(l => l.label === lang.name);
                    const progressValue = LEVEL_PROGRESS[lang.level] || 0;
                    return (
                        <ul>
                            <li key={lang.name} className='flex items-center mt-2 mb-2'>
                                {languageData?.logo && (
                                    <Image src={languageData.logo} alt={`${lang.name} flag`} className='w-6' />
                                )}
                                <p style={{marginLeft: 10}}>{lang.name} - {lang.level}</p>
                            </li>
                            <Progress size="sm" value={progressValue} />
                        </ul>
                    )
                })}
            </div>
        </>
    );
}