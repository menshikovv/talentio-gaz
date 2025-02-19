import { useEffect } from 'react';
import s from './ModalWindow.module.scss';
import { LANGUAGES } from '@/shared/constants/languages';
import Image from 'next/image';

export const ModalWindow = ({ type, data, onClose, onDelete }: IModalWindow) => {
    useEffect(() => {
                document.body.classList.add('no-scroll');
                return () => {
                    document.body.classList.remove('no-scroll');
                };
        }, []);

    const title = {
        stack: 'Мои навыки:',
        education: 'Образование:',
        languages: 'Владею языками:',
        experience: 'Опыт работы:',
        project: 'Мои проекты:',
    }

    const content = () => {
        switch(type) {
            case 'stack':
                return (
                    <ul>
                        {data.map((tech: string, index: number) => (
                                <li key={index} className={s.stack}>
                                    {tech}
                                    <svg onClick={() => onDelete && onDelete(tech)} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#ababab"></path> </g></svg>
                                </li>
                        ))}
                    </ul>
                )
            case 'education':
                return (
                    <>
                        {data.map((educ: any, index: number) => (
                            <ul className={s.educations}>
                                <li key={index}>{educ.level}</li>
                                <li key={index} className={s.education}><span>Учебное заведение:</span> {educ.nameSchool}</li>
                                {educ.specialization !== '-' && <li key={index} className={s.education}><span>Специальность:</span> {educ.specialization}</li>}
                                <li key={index} className={s.education}><span>Год окончания:</span> {educ.yearEnd}</li>
                            </ul>
                        ))}
                    </>
                )
            case 'languages' :
                return (
                    <ul>
                        {data.map((lang: any, index: number) => {
                            const languageData = LANGUAGES.find(l => l.label === lang.name);
                            return ( 
                                <li key={index} className={s.language}>
                                    {languageData?.logo && <Image src={languageData.logo} alt={`${lang.name} flag`} className={s.flag}/>}
                                    {lang.name} - {lang.level}
                                </li>
                            )
                        })}
                    </ul>
                )
            case 'experience':
                return (
                    <>
                        {data.map((exp: any, index: number) => {
                            const endDate = !exp.isCurrent ? `${exp.endDateMonth} ${exp.endDateYear}` : 'По настоящее время';
                            return (
                                <ul className={s.experiences}>
                                    <li className={s.experience} key={index}><span>Компания:</span> {exp.name}</li>
                                    <li className={s.experience} key={index}><span>Должность:</span> {exp.job_title}</li>
                                    <li className={s.experience} key={index}><span>Время работы:</span> {exp.startDateMonth} {exp.startDateYear} - {endDate}</li>
                                </ul>
                            )
                        })}
                    </>
                )
            case 'project':
                return (
                    <>
                        {data.map((proj: any, index: number) => (
                            <ul className={s.projects}>
                                <li key={index} className={s.project}><a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.name}</a></li>
                            </ul>
                        ))}
                    </>
                )
        }
    }

    return (
        <div className={s.modalOverlay}>
            <div className={s.modalContent}>
                <button className={s.closeButton} onClick={onClose}>×</button>
                <h2 className={s.title}>{title[type]}</h2>
                <div className={s.contentWrapper}>
                    {content()}
                </div>
            </div>
        </div>
    );
}

interface IModalWindow {
    type: 'stack' | 'education' | 'languages' | 'experience' | 'project',
    data: any,
    onClose: () => void,
    onDelete?: (item: string) => void,
}