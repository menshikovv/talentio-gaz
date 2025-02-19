import { useFormContext } from "react-hook-form";
import { IConnectionField, IEducationField, IExperienceField, ILanguageField, IProjectField } from "@/features/ResumeForm/interface/IForm";

export const useUserData = () => {
    const { watch, formState } = useFormContext();
    
    return {
        userNameValue: watch('userName', ''),
        userSurnameValue: watch('userSurname', ''),
        ageValue: watch('userAge', undefined),
        experienceFields: watch('userExperience', [] as IExperienceField[]),
        stackValue: watch('userStack', []),
        projectValue: watch('userProject', []) as IProjectField[],
        languageValue: watch('userLanguage', [] as ILanguageField[]),
        connectionValue: watch('userConnection', [] as IConnectionField[]),
        educationValue: watch('userEducation', [] as IEducationField[]),
        userCity: watch('userCity', ''),
        userCountry: watch('userCountry', ''),
        userAvatar: watch('userAvatar', null),
        userAbout: watch('userAbout', ''),
        userDrections: watch('userDirections', ''),
        userWishJobTitle: watch('wish_job_title'),
        userWishSalary: watch('wish_salary'),
        userEmployment: watch('employment'),
        userWorkTime: watch('work_time'),
        userPermission: watch('permission'),
        userTrips: watch('business_trips'),
        userWishSallaryCurrency: watch('wish_salary_currency'),

        userNameError: formState.errors['userName']?.message,
        userCityError: formState.errors['userCity']?.message,
        userCountryError: formState.errors['userCountry']?.message,
        userNameUniversityError: formState.errors['userNameUniversity']?.message,
        userSpecializationError: formState.errors['userSpecialization']?.message,
        userAboutError: formState.errors.userAbout?.message,
        userAboutWorkError: formState.errors.about_job?.message,
    }
}