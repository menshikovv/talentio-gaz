import { ILanguageField } from "../../../features/ResumeForm/interface/IForm";

export const hasValidLanguageFields = (fields: ILanguageField[], userAboutWorkError: any) => fields.length > 0 && fields.every(field => field.name && field.level && !userAboutWorkError);