export interface IExperienceField {
    name: string,
    startDateMonth: string,
    endDateMonth: string,
    job_title: string,
    about_job: string,
    startDateYear: string,
    endDateYear: string,
    isCurrent: boolean,
}

export interface IProjectField {
    name: string,
    link: string,
    id: number,
}

export interface ILanguageField {
    name: string,
    level: string,
}

export interface IFormData {
    userNameInput: string,
    age: number,
    userCity?: string,
    userCountry?: string,
    schoolInput?: string,
    course?: string,
    tech: string[],
    experience: IExperienceField[],
    project: IProjectField[],
    language: ILanguageField[],
    user_tg: string,
    userAvatar?: File | null
}

export interface IConnectionField {
    name: string | null,
    data: string | null,
}

export interface IEducationField {
    level: string | null,
    nameSchool: string | null,
    specialization: string | null,
    yearEnd: number | null,
}

