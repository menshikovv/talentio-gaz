import s from '../styles/UserAbout.module.scss';
import { Mentions } from 'antd';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import runes from 'runes2';
import { ErrorInput } from '@/shared/ui/ErrorInput/ErrorInput';
import { noForbiddenWords } from '@/shared/validate/noForbiddenWords';
import { memo } from 'react';

const UserAbout = memo(({ control }: IUserAboutProps) => {

  const [charCount, setCharCount] = useState(0);
  const maxLength = 500;

  return (
    <div className={s.wrapper}>
      <Controller 
        name='userAbout'
        control={control}
        rules={{
          validate: {
            maxLength: (value) => 
              runes(value).length <= maxLength,
            noForbiddenWords,            
          }
        }}
        render={({ field, fieldState }) => (
          <>
            <Mentions
              {...field}
              allowClear 
              rows={3}
              className={s.mentions}
              placeholder='Начните писать' 
              onChange={(newValue) => {
                const currentLength = runes(newValue).length;
                if (currentLength <= maxLength) {
                  field.onChange(newValue);
                  setCharCount(currentLength);
                }
              }}
            />
            {fieldState.error && <ErrorInput error={fieldState.error.message} />}
          </>
        )}
      />
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        {charCount}/{maxLength}
      </div>
    </div>
  );
});

export interface IUserAboutProps {
  control?: any,
  width?: boolean
}

export default UserAbout;