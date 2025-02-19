'use client'

import '../styles/globals.scss';
import '../styles/mixins.scss';
import '../styles/index.scss';
import { BackgroundDefault } from "@/shared/ui/BackgroundDefault/BackgroundDefault";
import { FormProvider, useForm } from "react-hook-form";
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/shared/config/router.config';
import { avatarStore } from '@/shared/stores/avatarStore/avatarStore';
import { MenuProps } from 'antd';
import s from './layout.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logoBig from '../../public/logo/logo.svg';
import { Avatar } from '@nextui-org/react';
import { Burger } from '@/shared/ui/Burger/Burger';
import AddNew from '@/shared/ui/AddNew/AddNew';
import { SettingsProvider } from '@/shared/context/SettingsContext';
import { fonts } from '@/shared/fonts/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const methods = useForm({ mode: 'onChange' });
    const pathname = usePathname();
    
    const handleCreate = () => {
      avatarStore.resetAvatar();
    }

    const font = fonts.montserratAlternates;
    const items: MenuProps['items'] = [
      {
        key: '1',
        label: 'Личный кабинет',
      },
      {
        key: '2',
        label: 'Настройки',
      },
      {
        key: '3',
        label: (
          <Link href={ROUTES.AUTH} style={{ color: 'red', cursor: 'pointer' }}>Выход</Link>
        )
      },
    ];
  
    const isPersonalPage = pathname === ROUTES.PERSONAL_PAGE;
    const isResumePage = pathname === ROUTES.RESUME;

  return (
    <html lang="en">
      <body>
        <FormProvider {...methods}>
          <SettingsProvider>
          <BackgroundDefault />
          <div className={s.wrapper}>
            <div className={`${s.content} container ${font}`}>
              <div className={s.logo}>
                <Image src={logoBig} width={200} alt='logo' height={50}/>
              </div>
              <div className={s.centerContent}>
                  <Link href={ROUTES.SUBSCRIPTION}>
                    <div className={s.premium}>
                        <span>Прокачаться</span>
                        <svg className="w-6 h-6" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                          <g id="SVGRepo_iconCarrier">
                            <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M92.953 57.154c22.628-22.627 57.983-35.355 76.368-33.94 1.414 18.384-11.314 53.74-33.941 76.367-22.628 22.627-48.084 39.598-62.226 45.255L47.698 119.38c5.657-14.142 22.628-39.598 45.255-62.226Zm-5.657 48.084-39.598 39.598"></path>
                            <circle cx="128.309" cy="64.225" r="12" fill="#ffffff" transform="rotate(45 128.309 64.225)"></circle>
                            <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="m115.581 119.38 1.569 17.256c.779 8.57-3.09 16.9-10.139 21.835l-16.886 11.82-1.414-32.527M73.154 76.953l-17.256-1.569a24 24 0 0 0-21.835 10.139l-11.82 16.886 32.527 1.414"></path>
                          </g>
                        </svg>
                    </div>
                  </Link>
                  <div className={s.leaders}>
                      <Link href={ROUTES.LEADERS} className="flex items-center gap-2 rounded-lg">
                            <span>Таблица лидеров</span>
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0002 16C6.24021 16 5.21983 10.2595 5.03907 5.70647C4.98879 4.43998 4.96365 3.80673 5.43937 3.22083C5.91508 2.63494 6.48445 2.53887 7.62318 2.34674C8.74724 2.15709 10.2166 2 12.0002 2C13.7837 2 15.2531 2.15709 16.3771 2.34674C17.5159 2.53887 18.0852 2.63494 18.5609 3.22083C19.0367 3.80673 19.0115 4.43998 18.9612 5.70647C18.7805 10.2595 17.7601 16 12.0002 16Z" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M19 5L19.9486 5.31621C20.9387 5.64623 21.4337 5.81124 21.7168 6.20408C22 6.59692 22 7.11873 21.9999 8.16234L21.9999 8.23487C21.9999 9.09561 21.9999 9.52598 21.7927 9.87809C21.5855 10.2302 21.2093 10.4392 20.4569 10.8572L17.5 12.5" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M4.99994 5L4.05132 5.31621C3.06126 5.64623 2.56623 5.81124 2.2831 6.20408C1.99996 6.59692 1.99997 7.11873 2 8.16234L2 8.23487C2.00003 9.09561 2.00004 9.52598 2.20723 9.87809C2.41441 10.2302 2.79063 10.4392 3.54305 10.8572L6.49994 12.5" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M12 17V19" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15.5 22H8.5L8.83922 20.3039C8.93271 19.8365 9.34312 19.5 9.8198 19.5H14.1802C14.6569 19.5 15.0673 19.8365 15.1608 20.3039L15.5 22Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18 22H6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                      </Link>
                  </div>
                  <div className={s.leaders}>
                      <Link href={ROUTES.BOOST} className="flex items-center gap-2 rounded-lg">
                            <span>Повысь просмотры</span>
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 2C1 1.44772 1.44772 1 2 1C2.55228 1 3 1.44772 3 2V20C3 20.5523 3.44771 21 4 21L22 21C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H3C1.89543 23 1 22.1046 1 21V2Z" fill="#ffffff"></path> <path d="M19.9285 5.37139C20.1336 4.85861 19.8842 4.27664 19.3714 4.07152C18.8586 3.86641 18.2766 4.11583 18.0715 4.62861L14.8224 12.7513C14.6978 13.0628 14.3078 13.1656 14.0459 12.9561L11.0811 10.5843C10.3619 10.0089 9.29874 10.2116 8.84174 11.0114L5.13176 17.5039C4.85775 17.9834 5.02434 18.5942 5.50386 18.8682C5.98338 19.1423 6.59423 18.9757 6.86824 18.4961L9.9982 13.0187C10.1505 12.7521 10.5049 12.6846 10.7447 12.8764L13.849 15.3598C14.635 15.9886 15.805 15.6802 16.1788 14.7456L19.9285 5.37139Z" fill="#ffffff"></path> </g></svg>
                      </Link>
                  </div>
              </div>
                <div className={s.right}>
                  <Link href={ROUTES.NEW} className={s.addNew}>
                      <AddNew />
                  </Link>
                  <div className={s.avatar}>
                    <Avatar radius="lg" />
                  </div>
                </div>
              <Burger />
            </div>
          </div>
          {children}
          </SettingsProvider>
        </FormProvider>
      </body>
    </html>
  );
}
