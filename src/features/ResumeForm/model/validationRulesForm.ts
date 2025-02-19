import { useFormContext } from "react-hook-form";
import { useUserData } from "../../../shared/hooks/useUserData";
import { avatarStore } from "../../../shared/stores/avatarStore/avatarStore";
import { hasValidExperienceFields, hasValidLanguageFields, hasValidProjectFields, hasValidConnectionFields, hasValidEducationFields } from './index';

export const validationRulesForm = (): Record<number, () => boolean> => {
    const { formState } = useFormContext();
    const { userNameValue, ageValue, userCity, userCountry, stackValue, experienceFields, projectValue, languageValue, 
        userAvatar, userAbout, userNameError, userCityError, userCountryError, 
        userAboutError, userAboutWorkError, userDrections, userWishJobTitle, userWishSalary,
        userEmployment, userWorkTime, connectionValue, userWishSallaryCurrency, educationValue,
    } = useUserData();
    return {
        0: () => !!userDrections,
        1: () => !!userNameValue && !userNameError,
        2: () => !!ageValue,
        3: () => !!userCity && !userCityError && !!userCountry && !userCountryError && userCountry.length >= 3,
        4: () => hasValidEducationFields(educationValue),
        5: () => stackValue.length > 0,
        6: () => hasValidExperienceFields(experienceFields),
        7: () => hasValidProjectFields(projectValue, formState.errors),
        8: () => hasValidLanguageFields(languageValue, userAboutWorkError),
        9: () => hasValidConnectionFields(connectionValue),
        10: () => avatarStore.avatar !== null && !!userAvatar,
        11: () => !!userAbout && !userAboutError && userAbout.length >= 15,
        12: () => !!userWishJobTitle && !!userWishSalary && !!userEmployment && !!userWorkTime && !!userWishSallaryCurrency,
    }
  };