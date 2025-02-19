'use client';

import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/config/router.config";
import { FieldButton } from "@/features/ResumeForm/ui";
import { fonts } from "@/shared/fonts/fonts";

const NotFound = () => {
    const router = useRouter();
    const font = fonts.montserratAlternates;
    return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '90vh', 
          color: 'white', 
          margin: 0,
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem' }} className={`${font}`}>404</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: 40 }} className={`${font}`}>Страница не найдена</p>
            <FieldButton text='Вернуться домой' handleClick={() => router.push(ROUTES.NEW)}/>
          </div>
        </div>
      );
}

export default NotFound;
