import { IConnectionField } from "../interface/IForm";

export const hasValidConnectionFields = (fields: IConnectionField[]) => 
    fields.length > 0 && fields.every((field) => {
        return field.name && field.data;
})