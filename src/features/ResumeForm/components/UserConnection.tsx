import { memo, useState } from 'react';
import s from '../styles/UserConnection.module.scss';
import { Controller, useFieldArray } from 'react-hook-form';
import { Input, Select } from 'antd';
import { CONNECTION } from '@/shared/constants/connection';
import { FieldButton } from '../ui';

const UserConnection = memo(({ control }: any) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'userConnection',
    });

    if (fields.length === 0) {
        append({ name: 'Telegram', data: '' });
    }

    const addField = () => {
        if (fields.length < 5) append({ name: null, data: null });
    };

    const [selectedValues, setSelectedValues] = useState<Record<number, string>>({});
    
      const handleSelectChange = (value: string, index: number) => {
        setSelectedValues((prev) => ({
          ...prev,
          [index]: value,
        }));
      };
    
      const getAvailableOptions = (index: number) => {
        const selected = Object.values(selectedValues).filter((_, idx) => idx !== index);
        return CONNECTION.filter((option) => !selected.includes(option.value));
      };

    return (
        <div className={s.wrapper}>
            <div className={s.buttons}>
                <FieldButton text='-' handleClick={() => remove(fields.length - 1)} />
                <FieldButton text='+' handleClick={addField} />
            </div>
            {fields.map((field, index) => (
                <div key={field.id} className={s.select__wrapper}>
                    <Controller
                        name={`userConnection.${index}.name`}
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                showSearch
                                placeholder='Вариант'
                                onChange={(value) => {
                                    field.onChange(value);
                                    handleSelectChange(value, index);
                                }}
                                options={getAvailableOptions(index)}
                                value={field.value}
                                disabled={index === 0}
                                className={s.select}
                            />
                        )}
                    />
                    <Controller
                        name={`userConnection.${index}.data`}
                        control={control}
                        render={({ field }) => (
                            <Input {...field} placeholder='Ссылка' />
                        )}
                    />
                </div>
            ))}
        </div>
    );
});

export default UserConnection;
