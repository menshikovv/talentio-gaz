import { Button, Input, InputNumber, Select, Tooltip } from 'antd';
import s from '../styles/UserEducation.module.scss';
import { useState, memo, useEffect } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { EDUCATION } from '@/shared/constants/education';
import { FieldButton } from '../ui';

const UserEducation = memo(({ control }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'userEducation',
  });

  if (fields.length === 0) {
    append({ level: 'Школьник', data: '' });
}

  const [selectedValues, setSelectedValues] = useState<Record<number, string>>({});

  const handleSelectChange = (value: string, index: number) => {
    setSelectedValues((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const getAvailableOptions = (index: number) => {
    const selected = Object.values(selectedValues).filter((_, idx) => idx !== index);
    return EDUCATION.filter((option) => !selected.includes(option.value));
  };

  const addField = () => {
    if (fields.length < EDUCATION.length) append({ nameSchool: null, specialization: null, yearEnd: null });
  };

  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        <FieldButton text="-" handleClick={() => remove(fields.length - 1)} disabled={fields.length == 1} />
        <FieldButton text="+" handleClick={addField} />
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className={s.select__wrapper}>
          <Controller
            name={`userEducation.${index}.level`}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                style={{ width: '100%', marginBottom: 10 }}
                options={getAvailableOptions(index)}
                placeholder="Выберите"
                onChange={(value) => {
                  field.onChange(value);
                  handleSelectChange(value, index);
                }}
              />
            )}
          />
          <Controller
            name={`userEducation.${index}.nameSchool`}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Название учебного заведения"
                style={{ marginBottom: 10 }}
              />
            )}
          />
          <Controller
            name={`userEducation.${index}.specialization`}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Специализация"
                style={{ marginBottom: 10 }}
              />
            )}
          />
          <Controller
            name={`userEducation.${index}.yearEnd`}
            control={control}
            render={({ field }) => (
              <InputNumber
                {...field}
                placeholder="Год окончания"
                style={{ width: '100%', marginBottom: 20 }}
                min={1950}
                max={2060}
              />
            )}
          />
        </div>
      ))}
      <p className={s.other}>
        Если вы школьник, в поле "Специализация" поставьте -
      </p>
    </div>
  );
});

export default UserEducation;
