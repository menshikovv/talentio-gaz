import { NotFoundText } from "../../../shared/ui/NotFoundText/NotFoundText";
import { capitalize } from "../../../shared/lib/text/capitalize";

export const ProjectList = ({ projects }: IProjectListProps) => {
    return (
        <div>
            <p style={{marginTop: 20}}><strong>Пет Проекты:</strong> {
                            projects.length > 0 
                            ? 
                            projects.map((proj, index: number) => (
                                <span key={index}>
                                    <a href={proj.link} target='_blank' rel="noopener noreferrer">{capitalize(proj.name)}</a>
                                    {index < projects.length - 1 && ', '}
                                </span>
                            ))
                            : <NotFoundText text={'Отсутствуют'} />}</p>
        </div>
    );
}

interface IProjectListProps {
    projects: { id: number, name: string, link: string }[]
}