import { Controller, useFieldArray, useWatch } from 'react-hook-form';
import s from '../styles/UserLanguage.module.scss';
import { Select } from 'antd';
import { LANGUAGES } from '@/shared/constants/languages';
import { LANGUAGE_LEVEL } from '@/shared/constants/languagesLevel';
import { IUserLanguageProps, ILanguage } from './interfaces/IUserLanguageProps';
import { FieldButton, FieldSkip } from "../ui";
import { memo } from "react";
import Image from 'next/image';

const UserLanguage = memo(({ control, step = 0, setStep, hideSkipButton, textAdd, width }: IUserLanguageProps) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'userLanguage'
    })

    const addField = () => {
        if (fields.length < LANGUAGES.length) append({ name: null, level: null });
    }

    const selectedLanguages = useWatch({
        control,
        name: 'userLanguage',
    });

    const getAvailableLanguages = (currentIndex: number): ILanguage[] => {
        const selectedNames = selectedLanguages?.map((lang: ILanguage) => lang?.name) || [];
        return LANGUAGES.filter((lang: ILanguage) => !selectedNames.includes(lang.label) || lang.label === selectedLanguages[currentIndex]?.name);
    };
    
    return (
        <div className={s.wrapper}>
            <div className={s.buttons}>
                {fields.length > 0 && <FieldButton text='-' handleClick={() => remove(fields.length - 1)}/>}
                <FieldButton text='+' handleClick={addField}/>
                {!fields.length && !hideSkipButton && <FieldSkip handleClick={() => setStep(step + 1)}/>}
            </div>
            {fields.map((field, index) => (
                <div key={field.id} className={s.select__wrapper}>
                    <Controller 
                        name={`userLanguage.${index}.name`}
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                showSearch
                                placeholder='Язык'
                                style={width ? {width: '100%', marginTop: '20px'} : {width: '250px', marginTop: '20px'}}
                                filterOption={(input, option) => typeof option?.title === 'string' ? option.title.toLowerCase().includes(input.toLowerCase()) : false}
                                options={getAvailableLanguages(index).map(lang => ({
                                    value: lang.label,
                                    label: (
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                                <Image src={lang.logo} alt={lang.label} style={{width: '20px', marginRight: '8px',}}/>
                                            {lang.label}
                                        </div>
                                    ),
                                    title: lang.label
                                }))}
                            />
                        )}
                    />
                    <Controller 
                        name={`userLanguage.${index}.level`}
                        control={control}
                        render={({ field }) => (
                            <Select 
                                {...field}
                                showSearch
                                placeholder='Уровень'
                                className={s.select__level}
                                style={width ? {width: '100%', marginTop: '20px'} : {width: '250px', marginTop: '20px'}}
                                filterOption={(input, option) => typeof option?.title === 'string' ? option.title.toLowerCase().includes(input.toLowerCase()) : false}
                                options={LANGUAGE_LEVEL.map(level => ({
                                    value: level.label,
                                    label: (
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <Image src={level.logo} alt={level.label} style={{width: '20px', height: '20px', marginRight: '8px'}}/>
                                            {level.label}
                                        </div>
                                    ),
                                    title: level.label
                                }))}
                            />
                        )}
                    />
                </div>
            ))}
        </div>
    );
});

export default UserLanguage;