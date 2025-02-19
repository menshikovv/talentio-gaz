import { useUserData } from '@/shared/hooks/useUserData';
import s from './About.module.scss';

export const About = () => {
    const { userAbout } = useUserData();
    return (
        <>
            <h1 className='titleResumeAside'>О СЕБЕ</h1>
            <p className={s.about__me}>{userAbout}</p>
        </>
    );
}