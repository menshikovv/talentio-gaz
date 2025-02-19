import { FONTS, Font } from '@/shared/constants/fonts';
import { useSettings } from '@/shared/context/SettingsContext';
import { PremiumLogo } from '@/shared/ui/PremiumLogo/PremiumLogo';
import { Button } from '@heroui/react';
import { ColorPicker } from 'antd';
import React from 'react';
import { fonts } from '@/shared/fonts/fonts';
import { Color } from 'antd/es/color-picker';

export const Text = () => {
    const { setFont, setColorFont, colorFont } = useSettings();
    return (
        <>
        <div className='flex items-center'> <h2 style={{marginTop: 20, marginBottom: 10, fontSize: 24}}>Текст</h2> <PremiumLogo /> </div>
                <div className='flex items-center'>
                    <h3>Текущий цвет:</h3>
                    <ColorPicker defaultValue="#ffffff" size="large" showText style={{marginLeft: 10}} getPopupContainer={(trigger) => trigger.parentElement!} format='hex' onChange={(color: Color) => setColorFont(color.toHexString())}  value={colorFont}/>
                </div>
                <div className='flex items-center flex-wrap mt-2 gap-3'>
                    <h3>Шрифт:</h3>
                    {FONTS.map((font: Font) => (
                        <Button radius="sm" style={{color: 'white', backgroundColor: '#363636'}} onPress={() => setFont(font.value as keyof typeof fonts)} className={fonts[font.value as keyof typeof fonts]}>{font.name}</Button>
                    ))}
                </div>
        </>
    );
}