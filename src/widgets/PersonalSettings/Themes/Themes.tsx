import { THEMES } from '@/shared/constants/themes';
import { themeStore, Theme } from '@/shared/stores/themeStore/themeStore';
import Image from 'next/image';
import { useState } from 'react';
import s from './Themes.module.scss';
import { Switch, Tooltip } from 'antd';
import { useSettings } from '@/shared/context/SettingsContext';

export const Themes = () => {
    const { theme, switchTheme } = themeStore;
    const [hoveredThemeId, setHoveredThemeId] = useState<Theme | null>(null);
    const { isBlurThemes, setIsBlurThemes } = useSettings();

    return (
        <>
            <h2 className='mb-5 text-2xl'>Темы</h2>
            <div className={s.theme__container}>
                {THEMES.map(({ id, name, imgThemeProfile, imgDefault }) => {
                    const isActive = theme === id;
                    const isHovered = hoveredThemeId === id;

                    return (
                        <div key={id} className={s.item} onClick={() => switchTheme(id as Theme)}>
                            <Image 
                                src={isHovered ? imgDefault : imgThemeProfile} 
                                alt={`${name} theme`} 
                                onMouseEnter={() => setHoveredThemeId(id as Theme)}
                                onMouseLeave={() => setHoveredThemeId(null)}
                            />
                            <p 
                                className={s.name} 
                                style={{ color: isActive ? '#45D483' : 'inherit', marginBottom: 20, marginTop: 5 }}
                            >
                                {name}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className='flex items-center'>
                <Tooltip title="Применяется к заднему фону">
                    <h3 style={{fontSize: 15, marginRight: 20, textDecoration: 'underline', fontWeight: 600}}>Блюр</h3>
                </Tooltip>
                <Switch onChange={() => setIsBlurThemes(!isBlurThemes)} checked={isBlurThemes} />
            </div>
        </>
    );
}