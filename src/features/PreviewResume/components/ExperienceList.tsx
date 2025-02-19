import { capitalize } from "../../../shared/lib/text/capitalize";
import { NotFoundText } from "../../../shared/ui/NotFoundText/NotFoundText"
import { DropdownDisplay } from "./DropdownDisplay"

export const ExperienceList = ({ experiences }: IExperienceListProps) => {
    if (!experiences.length) return <NotFoundText text={'Отсутствует'} />

    const experienceItems = experiences.map((exp) => ({
        key: String(exp.id),
        label: (
            <>
                <strong style={{ textAlign: 'center', display: 'block', color: 'white' }}>{capitalize(exp.name)}</strong>
                <strong style={{ textAlign: 'center', display: 'block', color: 'white' }}>{capitalize(exp.job_title)}</strong>
                <span style={{ color: 'white', textAlign: 'center', display: 'block' }}>
                    {exp.startDateMonth} {exp.startDateYear} -{' '}
                    {exp.isCurrent ? 'По настоящее время' : `${exp.endDateMonth} ${exp.endDateYear}`}
                </span>
            </>
        ),
    }));

    return <DropdownDisplay items={experienceItems} />;
}

interface Experience {
    id: number;
    name: string;
    job_title: string;
    startDateMonth: string;
    startDateYear: string;
    endDateMonth?: string;
    endDateYear?: string;
    isCurrent: boolean;
}

interface IExperienceListProps {
    experiences: Experience[]
}