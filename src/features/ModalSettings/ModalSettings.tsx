import ReactDOM from 'react-dom';
import s from './ModalSettings.module.scss';
import { useState } from 'react';
import { Custom } from './components/Custom';
import { Edit } from './components/Edit';
import { Privacy } from './components/Privacy';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@heroui/react';
import { fonts } from '@/shared/fonts/fonts';

export const ModalSettings = ({ onClose, isOpen }: ISettingsProps) => {
    const [activeTab, setActiveTab] = useState<'custom' | 'widgets' | 'privacy'>('custom');
    const font = fonts.montserratAlternates;

    const tabs = {
        custom: <Custom />,
        widgets: <Edit />,
        privacy: <Privacy />
    }
    return ReactDOM.createPortal(
        <Drawer isOpen={isOpen} size='3xl' onClose={onClose} className='backdrop-blur-md'>
        <DrawerContent>
            <>
              <DrawerBody>
                    <div className={`${s.contentWrapper} ${font}`}>
                            {tabs[activeTab]}
                    </div>
              </DrawerBody>
              <DrawerFooter>
                <div className={s.choice}>
                        <p onClick={() => setActiveTab('custom')} style={{fontWeight: 800}}>Кастомизация</p>
                        <div className={s.vertical__border} />
                        <p onClick={() => setActiveTab('widgets')} style={{fontWeight: 800}}>Виджеты</p>
                        <div className={s.vertical__border} />
                        <p onClick={() => setActiveTab('privacy')} style={{fontWeight: 800}}>Приватность</p>
                    </div>
              </DrawerFooter>
            </>
        </DrawerContent>
      </Drawer>,
        document.body
    );
    
};

interface ISettingsProps {
    onClose: () => void;
    isOpen: boolean
}