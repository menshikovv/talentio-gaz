import { Input, InputProps } from '@heroui/input';
import React from 'react';
import { EyeSlashFilledIcon } from './EyesPassword/EyeSlashFilledIcon/EyeSlashFilledIcon';
import { EyeFilledIcon } from './EyesPassword/EyeFilledIcon/EyeFilledIcon';

export const InputPassword = (props: InputProps) => {
    const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...props}
      className="max-w-xs"
      isRequired
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      label="Пароль"
      type={isVisible ? "text" : "password"}
      variant="underlined"
    />
  );
}