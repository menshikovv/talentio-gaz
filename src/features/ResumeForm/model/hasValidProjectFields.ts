import { IProjectField } from "../../../features/ResumeForm/interface/IForm";

export const hasValidProjectFields = (fields: IProjectField[], errors: any) =>
    fields.length > 0 && fields.every((field, index) => {
      const projectNameError = errors?.project?.[index]?.name;
      const projectLinkError = errors?.project?.[index]?.link;
      return field.name && field.link && !projectNameError && !projectLinkError;
});