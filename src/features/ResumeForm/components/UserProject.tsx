import s from '../styles/UserProject.module.scss';
import { Input } from 'antd';
import { Controller, useFieldArray } from 'react-hook-form';
import { ErrorInput } from '@/shared/ui/ErrorInput/ErrorInput';
import { IUserProjectProps } from './interfaces/IUserProjectProps';
import { noForbiddenWords } from '@/shared/validate/noForbiddenWords';
import { FieldButton, FieldSkip } from "../ui";
import { memo } from "react";

const UserProject = memo(({ control, step = 0, setStep, hideSkipButton, textAdd }: IUserProjectProps) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'userProject'
    });

    const addField = () => append({ name: '', link: '' });

    return (
        <div className={s.wrapper}>
            <div className={s.buttons}>
                {fields.length > 0 && <FieldButton text='-' handleClick={() => remove(fields.length - 1)}/>}
                <FieldButton text='+' handleClick={addField}/>
                {!fields.length && !hideSkipButton && <FieldSkip handleClick={() => setStep(step + 1)}/>}
            </div>
            {fields.map((field, index) => (
                <div className={s.inputs} key={field.id}>
                <Controller 
                    name={`userProject.${index}.name`}
                    control={control}
                    rules={{ validate: noForbiddenWords }}
                    render={({ field, fieldState }) => (
                        <>
                            <Input placeholder="Название проекта" {...field} />
                            {fieldState.error && <ErrorInput error={fieldState.error.message} />}
                        </>
                    )}
                />
                <Controller 
                    name={`userProject.${index}.link`}
                    control={control}
                    rules={{
                        pattern: {
                            value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                            message: 'Введите корректную ссылку'
                        }
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <>
                            <Input {...field} placeholder="Ссылка на проект/Git Hub" style={{marginTop: 15}}/>
                            {error && <ErrorInput error={error.message} />}
                        </> 
                    )}
                />
            </div>
            ))}
        </div>
    );
});

export default UserProject;