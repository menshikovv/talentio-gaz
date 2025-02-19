import { useUserData } from '@/shared/hooks/useUserData';
import s from './Experience.module.scss';
import { capitalize } from '@/shared/lib/text/capitalize';
import { calculateTotalWorkDuration } from '@/shared/lib/date/calculateTotalWorkDuration';

export const Experience = () => {
    const { experienceFields } = useUserData();
    const totalTimeWork = calculateTotalWorkDuration(experienceFields);
    return (
        <>
            <h1 className='titleResumeAside'>ОПЫТ РАБОТЫ</h1>
            <h2 className='mt-2'>Мой общий опыт работы - {totalTimeWork}</h2>
            {experienceFields.map((exp: any) => {
                const endDate = !exp.isCurrent ? `${exp.endDateMonth} ${exp.endDateYear}` : 'По настоящее время';
                return (
                    <div className={s.experience__content}>
                        <div className={s.experience__name}>
                            <h2 className={s.job_name}>{capitalize(exp.name)}</h2>
                            <div>
                                <p>{exp.startDateMonth} {exp.startDateYear} - {endDate}</p>
                            </div>
                        </div>
                        <h3 className={s.job_title}>{capitalize(exp.job_title)}</h3>
                        <h3 className='mt-2'>О работе:</h3>
                        <p className={s.about_job}>{exp.about_job}</p>
                    </div>
                )
            })}
        </>
    );
}