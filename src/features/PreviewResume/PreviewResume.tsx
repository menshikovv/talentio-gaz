import { useFormContext } from 'react-hook-form';
import s from './PreviewResume.module.scss'
import { avatarStore } from '../../shared/stores/avatarStore/avatarStore';
import { useRouter } from 'next/navigation';
import { IPreviewResumeProps } from './interfaces/IPreviewResumeProps';
import { capitalize } from '../../shared/lib/text/capitalize';
import { DropdownDisplay } from './components/DropdownDisplay';
import { ExperienceList } from './components/ExperienceList';
import { ProjectList } from './components/ProjectList';
import { generateAboutItems } from './lib/generateAboutItems';
import { renderLanguages } from './ui/renderLanguages/renderLanguages';
import { ROUTES } from '@/shared/config/router.config';
import { renderConnection } from './ui/renderConnection/renderConnection';

const PreviewResume = ({ setStep }: IPreviewResumeProps) => {
    const { getValues, reset } = useFormContext();
    const formData = getValues();
    const router = useRouter();

    const { userName, userAge, userCountry, userCity, userStack, userExperience, userProject, userLanguage,  userAbout, userDirections, userConnection, userEducation } = formData;

    const onReset = () => {
        reset();
        setStep(0);
        avatarStore.resetAvatar();
    }

    const aboutItems = generateAboutItems(userAbout);

    return (
        <div className={s.wrapper}>
            <div className={s.preview}>
                <h1 className={s.title}>Проверьте информацию</h1>
                <div className={s.data}>
                        <p style={{marginTop: 20}}><strong>Профессия:</strong> {userDirections}</p>
                        <p style={{marginTop: 20}}><strong>Имя:</strong> {capitalize(userName)}</p>
                        <p><strong>Возраст:</strong> {userAge}</p>
                        <strong>О себе: </strong><DropdownDisplay items={aboutItems}/>
                        <p style={{marginTop: 20}}><strong>Страна и город:</strong> {userCountry}, {capitalize(userCity)}</p>
                        {userEducation.map((educ: any, index: number) => (
                            <>
                                <p><strong>Образование:</strong> {educ.level}</p>
                                <p><strong>Учебное заведение:</strong> {educ.nameSchool}</p>
                                {educ.specialization !== '-' && <p><strong>Специальность:</strong> {educ.specialization}</p>}
                                <p><strong>Год окончания:</strong> {educ.yearEnd}</p>
                            </>
                        ))}
                        <div style={{ display: 'flex' }}>
                            <p style={{fontWeight: 600}}>Стек:</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: 3 }}>
                                {userStack.map((tech: string, index: number) => <p key={index} style={{ margin: '0 2px' }}>{capitalize(tech)}{index !== userStack.length - 1 && ','}</p>)}
                            </div>
                        </div>
                        <strong>Опыт: </strong> <ExperienceList experiences={userExperience}/>
                        <ProjectList projects={userProject}/>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            <p style={{margin: 0, fontWeight: 600}}>Иностранные языки: </p>
                                {renderLanguages(userLanguage)}
                        </div>
                        {renderConnection(userConnection)}
                        <p className={s.other}>остальная информация будет доступна после создания...</p>
                </div>
            </div>
            <h2 style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>Все верно?</h2>
            <div style={{display: 'flex', justifyContent: 'center'}} className={s.buttons}>
                <button className={`${s.btn__false} button`} onClick={onReset}>Нет, начать заново</button>
                <button className={`${s.btn__true} button`} onClick={() => router.push(ROUTES.PERSONAL_PAGE)}>Да, все верно</button>
            </div>
        </div>
    );
}

export default PreviewResume;