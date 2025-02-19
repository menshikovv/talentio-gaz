import { useSettings } from '@/shared/context/SettingsContext';
import { PremiumLogo } from '@/shared/ui/PremiumLogo/PremiumLogo';
import { Checkbox, Input } from '@heroui/react';
import { ColorPicker } from 'antd';
import React, { useEffect, useState } from 'react';

export const Extra = () => {
    const { setRainbowColor } = useSettings();
    const [isRainbow, setIsRainbow] = useState<boolean>(false);
    
        useEffect(() => {
            if (!isRainbow) {
                setRainbowColor('white')
            }
        }, [isRainbow, setRainbowColor])
        
    return (
        <>
            <div className='flex items-center'> <h2 style={{marginTop: 20, marginBottom: 10, fontSize: 24}}>Дополнительно</h2> <PremiumLogo /> </div>
            <div>
                <div className='flex items-center'>
                    <Checkbox color="default" onChange={() => setIsRainbow(!isRainbow)}><p style={{color: isRainbow ? 'white' : 'grey'}}>Радужный ник</p></Checkbox>
                    <ColorPicker style={{marginLeft: 10}} allowClear showText mode="gradient" onChangeComplete={(color) => setRainbowColor(color.toCssString())}  getPopupContainer={(trigger) => trigger.parentElement!} disabled={!isRainbow} />
                </div>
                <div className='flex items-center mt-2'>
                    <h3 style={{marginRight: 10}}>Свой домен:</h3>
                    <div style={{width: '50%'}}>
                        <Input
                            labelPlacement="outside"
                            placeholder="ваш домен"
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">https://talentio.space/</span>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}