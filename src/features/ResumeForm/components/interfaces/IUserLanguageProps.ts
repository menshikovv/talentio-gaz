export interface IUserLanguageProps {
    control?: any,
    step?: number,
    setStep: (step: number) => void,
    hideSkipButton?: boolean,
    textAdd?: boolean,
    width?: boolean,
}

export interface ILanguage {
    label: string,
    logo: string,
    name?: string,
}