import { Select, Input, Skeleton } from 'antd';
import { Controller } from 'react-hook-form';
import { COUNTRYS } from '@/shared/constants/countries';
import { noForbiddenWords } from '@/shared/validate/noForbiddenWords';
import { ErrorInput } from '@/shared/ui/ErrorInput/ErrorInput';
import { memo, useState } from "react";
import Image from 'next/image';

const UserLocation = memo(({ control }: any) => {
    return (
        <div>
            <Controller
                name='userCountry'
                control={control}
                render={({ field }) => (
                    <>
                        <Select {...field}
                                style={{ marginRight: 20, width: '100%' }}
                                showSearch
                                placeholder='Выберите вашу страну' 
                                optionFilterProp='label' 
                                onChange={(value) => {
                                    field.onChange(value);
                                }}
                                options={COUNTRYS.map(country => ({
                                    label: (
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            {
                                                <Image src={country.logo} 
                                                    alt={country.label}
                                                    style={{ width: 20, height: 20, marginRight: 8 }}
                                                />
                                            }
                                            {country.label}
                                        </div>
                                    ),
                                    value: country.label,
                                }))}
                            />
                    </>
                )}/>
                <Controller
                name='userCity'
                control={control}
                rules={{
                    pattern: {
                        value: /^[^\d]*$/,
                        message: 'Некорректный ввод'
                     },
                     validate: noForbiddenWords,
                     maxLength: {
                        value: 50,
                        message: ''
                     }
                }}
                render={({ field, fieldState }) => (
                    <>
                        <Input {...field} placeholder='Напишите ваш город' style={{ marginTop: '20px' }} maxLength={30}/>
                        {fieldState?.error && <ErrorInput error={fieldState?.error.message} />}
                    </>
                )}/>
        </div>
    );
});

export default UserLocation;