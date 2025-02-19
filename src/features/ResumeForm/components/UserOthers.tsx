import React from 'react';
import s from '../styles/UserOthers.module.scss';
import { Controller } from 'react-hook-form';
import { Checkbox, Input, InputNumber, Select } from 'antd';
import { employment, selectAfter, work__time } from '../constants/constants';

const UserOthers = ({ control }: any) => {
    const { Option } = Select;
    return (
        <div className={s.wrapper}>
            <div className={s.wish}>
                <div className={s.wish__job__title}>
                    <h2 className={s.title}>Желаемая должность</h2>
                    <Controller
                        name="wish_job_title"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} maxLength={60} placeholder="Например, Fullstack Developer" />
                        )}
                    />
                </div>
                <div className={s.wish__salary}>
                    <h2 className={s.title}>Желаемая зарплата</h2>
                    <div style={{display: 'flex'}}>
                    <Controller
                        name="wish_salary"
                        control={control}
                        render={({ field }) => (
                            <InputNumber {...field} style={{ width: '100%' }} min={0} max={1000000000}/>
                        )}
                    />
                    <Controller
                        name="wish_salary_currency"
                        control={control}
                        render={({ field }) => (
                            <Select style={{ width: 80 }} {...field}>
                                <Option value="₽">₽</Option>
                                <Option value="₸">₸</Option>
                                <Option value="$">$</Option>
                                <Option value="₴">₴</Option>
                                <Option value="€">€</Option>
                                <Option value="£">£</Option>
                                <Option value="¥">¥</Option>
                            </Select>
                        )}
                    />
                    </div>
                </div>
                <div className={s.business_trips}>
                        <h2 className={s.title}>Готовность к командаривокам:</h2>
                        <Controller 
                            name='business_trips'
                            control={control}
                            render={({ field }) => (
                                <Checkbox {...field} className={s.checkbox} />
                            )}
                        />
                </div>
                <div className={s.permission}>
                        <h2 className={s.title}>Разрешение на работу</h2>
                        <Controller 
                            name='permission'
                            control={control}
                            render={({ field }) => (
                                <Checkbox {...field} className={s.checkbox} />
                            )}
                        />
                </div>
                <div className={s.extra}>
                    <div className={s.employment}>
                        <h2 className={s.title}>Занятость</h2>
                        <Controller
                            name="employment"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={employment}
                                    placeholder="Нажмите"
                                    style={{ width: '100%' }}
                                />
                            )}
                        />
                    </div>
                    <div className={s.work__time}>
                        <h2 className={s.title}>График работы</h2>
                        <Controller
                            name="work_time"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={work__time}
                                    placeholder="Нажмите"
                                    style={{ width: '100%' }}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
            <p className={s.other}>информацию можно изменить в любой момент</p>
        </div>
    );
};

export default UserOthers;
