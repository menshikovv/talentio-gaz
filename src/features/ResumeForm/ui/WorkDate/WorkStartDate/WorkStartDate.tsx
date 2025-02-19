import { InputNumber, Select } from 'antd';
import { Controller } from 'react-hook-form';
import { MONTHS } from '../../../../../shared/constants/months';
import s from './WorkStartDate.module.scss'

export const WorkStartDate = ({ control, index }: any) => {
    return (
        <div style={{marginTop: 20}}>
                                <p className={s.title}>Начало работы</p>
                                <Controller
                                    name={`userExperience.${index}.startDateMonth`}
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            showSearch
                                            style={{  width: 150, marginRight: 25 }}
                                            placeholder='Месяц' 
                                            onChange={(value) => {
                                                field.onChange(value)
                                            }}
                                            options={MONTHS.map(month => ({
                                                label: (<div>{month.name}</div>),
                                                value: month.name
                                            }))}
                                        />
                                    )}
                                />
                                <Controller
                                    name={`userExperience.${index}.startDateYear`}
                                    control={control}
                                    render={({ field }) => (
                                        <InputNumber min={1900} max={new Date().getFullYear()} {...field} placeholder='Год' className={s.startYear}/>
                                    )}
                                />
                            </div>
    );
}