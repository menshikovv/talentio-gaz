import Link from 'next/link';
import s from './MenuBurger.module.scss';
import { ROUTES } from '@/shared/config/router.config';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const MenuBurger = ({ onClose }: IMenuProps) => {
    const pathname = usePathname();

    const isPersonalPage = pathname === ROUTES.PERSONAL_PAGE;
    const isResumePage = pathname === ROUTES.RESUME;
    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);
    return (
        <div className={s.menu}>
            <div className={s.menu__content}>
                <h1 className={s.title}>Меню</h1>
                <button className={s.closeButton} onClick={onClose}>x</button>
                {isPersonalPage && <Link href={ROUTES.RESUME} onClick={onClose} className={s.link}>Режим "Резюме"</Link>}
                {isResumePage && <Link href={ROUTES.PERSONAL_PAGE} onClick={onClose} className={s.link}>Режим "Страничка"</Link>}
                <Link href={ROUTES.SUBSCRIPTION} onClick={onClose} className={`${s.link} ${s.premium}`}><span>Прокачаться</span></Link>
                <Link href={ROUTES.NEW} onClick={onClose} className={s.link} >
                    <span>Создать новое</span>
                    <svg className="w-6 h-6" fill="#ffffff" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g> <path d="M66,42H54V30a6,6,0,0,0-12,0V42H30a6,6,0,0,0,0,12H42V66a6,6,0,0,0,12,0V54H66a6,6,0,0,0,0-12Z"></path> <path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z"></path> </g> </g></svg>
                </Link>
                <Link href={ROUTES.LEADERS} onClick={onClose} className={s.link}>
                    <span>Таблица лидеров</span>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0002 16C6.24021 16 5.21983 10.2595 5.03907 5.70647C4.98879 4.43998 4.96365 3.80673 5.43937 3.22083C5.91508 2.63494 6.48445 2.53887 7.62318 2.34674C8.74724 2.15709 10.2166 2 12.0002 2C13.7837 2 15.2531 2.15709 16.3771 2.34674C17.5159 2.53887 18.0852 2.63494 18.5609 3.22083C19.0367 3.80673 19.0115 4.43998 18.9612 5.70647C18.7805 10.2595 17.7601 16 12.0002 16Z" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M19 5L19.9486 5.31621C20.9387 5.64623 21.4337 5.81124 21.7168 6.20408C22 6.59692 22 7.11873 21.9999 8.16234L21.9999 8.23487C21.9999 9.09561 21.9999 9.52598 21.7927 9.87809C21.5855 10.2302 21.2093 10.4392 20.4569 10.8572L17.5 12.5" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M4.99994 5L4.05132 5.31621C3.06126 5.64623 2.56623 5.81124 2.2831 6.20408C1.99996 6.59692 1.99997 7.11873 2 8.16234L2 8.23487C2.00003 9.09561 2.00004 9.52598 2.20723 9.87809C2.41441 10.2302 2.79063 10.4392 3.54305 10.8572L6.49994 12.5" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M12 17V19" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15.5 22H8.5L8.83922 20.3039C8.93271 19.8365 9.34312 19.5 9.8198 19.5H14.1802C14.6569 19.5 15.0673 19.8365 15.1608 20.3039L15.5 22Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18 22H6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                </Link>
            </div>
        </div>
    );
}

interface IMenuProps {
    onClose: () => void;
}