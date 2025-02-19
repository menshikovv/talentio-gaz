import { useUserData } from '@/shared/hooks/useUserData';
import s from './Contacts.module.scss';
import { renderConnection } from '@/features/ResumeForm/ui/renderConnection/renderConnection';

export const Contacts = () => {
    const { connectionValue } = useUserData();
    return (
        <>
            <h1 className='titleResumeAside'>КОНТАКТЫ</h1>
            <div className={s.contacts}>
                {renderConnection(connectionValue)}
            </div>
        </>
    );
}