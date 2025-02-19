import { Controller } from 'react-hook-form';
import s from './WorkEndDate.module.scss'
import { MONTHS } from '../../../../../shared/constants/months';
import { InputNumber, Select } from 'antd';

export const WorkEndDate = ({ control, index, getValues }: any) => {
    return (
        <div>
            <p className={s.title}>Конец работы</p>
                {getValues(`userExperience.${index}.showEndDate`) && (
                    <>
                        <Controller
                        name={`userExperience.${index}.endDateMonth`}
                        control={control}
                        rules={{
                            validate: (value) => {
                                const startMonth = getValues(`userExperience.${index}.startDateMonth`);
                                const startYear = getValues(`userExperience.${index}.startDateYear`);
                                const endYear = getValues(`userExperience.${index}.endDateYear`);

                                if (endYear && startYear && endYear < startYear) return false;
                                

                                if (endYear === startYear && MONTHS.findIndex(month => month.name === value) < MONTHS.findIndex(month => month.name === startMonth)) return false;
                                

                                return true;
                            },
                        }}
                        render={({ field }) => (
                            <>
                                <Select
                                    {...field}
                                    showSearch
                                    placeholder='Месяц'
                                    style={{  width: 150, marginRight: 25 }}
                                    onChange={(value) => field.onChange(value)}
                                    options={MONTHS.map((month) => ({
                                        label: <div>{month.name}</div>,
                                        value: month.name,
                                    }))}
                                />
                            </>
                        )}
                    />
                    <Controller
                        name={`userExperience.${index}.endDateYear`}
                        control={control}
                        rules={{
                            validate: (value) => {
                                const startYear = getValues(`userExperience.${index}.startDateYear`);
                                const startMonth = getValues(`userExperience.${index}.startDateMonth`);
                                const endMonth = getValues(`userExperience.${index}.endDateMonth`);

                                if (value && startYear && value < startYear) return false;
                                if (value === startYear && MONTHS.findIndex(month => month.name === endMonth) < MONTHS.findIndex(month => month.name === startMonth)) return false;
                                
                                return true;
                            },
                        }}
                        render={({ field }) => (
                            <>
                                <InputNumber
                                    min={1900}
                                    max={new Date().getFullYear()}
                                    {...field}
                                    placeholder="Год"
                                    style={{ marginBottom: 20 }}
                                />
                            </>
                        )}
                    />
                    </>
                )}
        </div>
    );
}