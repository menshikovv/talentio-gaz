import { IEducationField } from "../interface/IForm";

export const hasValidEducationFields = (fields: IEducationField[]) => 
    fields.length > 0 && fields.every((field) => {
        return field.nameSchool && field.level && field.specialization && field.yearEnd;
})