import { useUserData } from '@/shared/hooks/useUserData';
import { capitalize } from '@/shared/lib/text/capitalize';

export const Education = () => {
    const { educationValue } = useUserData();
    return (
        <>
            <h1 className='titleResumeAside'>ОБРАЗОВАНИЕ</h1>
            <ul>
                {educationValue.map((educ: any) => (
                    <li key={educ.nameSchool} className='mt-2'>
                        <div className='flex justify-between'>
                            <h2 style={{fontWeight: 700}}>{educ.nameSchool}, {educ.level}</h2>
                            <p>{educ.yearEnd}</p>
                        </div>
                        <p>{educ.specialization !== '-' && capitalize(educ.specialization)}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}