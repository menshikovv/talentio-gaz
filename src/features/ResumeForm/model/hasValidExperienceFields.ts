import { IExperienceField } from "../../../features/ResumeForm/interface/IForm";
import { MONTHS } from "../../../shared/constants/months";

export const hasValidExperienceFields = (fields: IExperienceField[]) =>
    fields.length > 0 &&
    fields.every((field) => {
      const isValidBaseFields =
        field.name &&
        field.job_title &&
        field.startDateMonth &&
        field.startDateYear &&
        field.about_job;
  
      const startMonthIndex = MONTHS.findIndex((m) => m.name === field.startDateMonth);
      const endMonthIndex = MONTHS.findIndex((m) => m.name === field.endDateMonth);
  
      const isValidDates =
        field.isCurrent ||
        (field.endDateMonth &&
          field.endDateYear &&
          (field.endDateYear > field.startDateYear ||
            (field.endDateYear === field.startDateYear && endMonthIndex >= startMonthIndex)));
  
      return isValidBaseFields && isValidDates;
    });