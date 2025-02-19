'use client'

import '.././styles/ThemeSwitcher.scss';
import { videoSources } from '@/features/ThemeSwitcher/model/videoSources';
import { observer } from 'mobx-react-lite';
import { themeStore } from '@/shared/stores/themeStore/themeStore';
import { useSettings } from '@/shared/context/SettingsContext';
import { BackgroundDefault } from '@/shared/ui/BackgroundDefault/BackgroundDefault';
import { ReactNode } from 'react';
    
export const ThemeSwitcher = observer(({children}: IThemeSwitcherProps) => {
    const { theme } = themeStore;
    const { isBlurThemes } = useSettings();

    if (theme === 'default') return <>{children}</>
    return (
        <>
                <div className='video_background' >
                        <video 
                            src={videoSources[theme]}
                            className="video_element"
                            autoPlay
                            loop
                            muted
                            playsInline
                            disablePictureInPicture
                            style={{filter: isBlurThemes ? 'blur(10px)' : 'none'}}
                        ></video>
                </div>
            {children}
        </>
    );
});

interface IThemeSwitcherProps {
    children: ReactNode;
}