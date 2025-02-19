import { Input, Flex } from "antd";
import { Controller } from "react-hook-form";
import { runes } from "runes2";
import '@/styles/FormTransitions.scss';
import { noForbiddenWords } from "@/shared/validate/noForbiddenWords";
import { ErrorInput } from "@/shared/ui/ErrorInput/ErrorInput";
import { memo } from "react";
import s from '../styles/UserName.module.scss';

const UserName = memo(({ control }: any) => {
  return (
    <Flex vertical gap={20} className={s.wrapper}>
      <Controller
        name="userName"
        control={control}
        rules={{
          pattern: {
            value: /^[A-Za-zА-Яа-яЁё]+$/u,
            message: "Некорректный ввод",
          },
          validate: noForbiddenWords,
        }}
        render={({ field, fieldState }) => (
          <>
            <Input
              placeholder="Имя"
              {...field}
              count={{
                show: true,
                max: 20,
                strategy: (txt) => runes(txt).length,
                exceedFormatter: (txt, { max }) =>
                  runes(txt).slice(0, max).join(""),
              }}
            />
            {fieldState?.error && <ErrorInput error={fieldState?.error.message} />}
          </>
        )}
      />
      <Controller
        name="userSurname"
        control={control}
        rules={{
          validate: noForbiddenWords,
        }}
        render={({ field, fieldState }) => (
          <>
            <Input
              placeholder="Фамилия"
              {...field}
              count={{
                show: true,
                max: 30,
                strategy: (txt) => runes(txt).length,
                exceedFormatter: (txt, { max }) =>
                  runes(txt).slice(0, max).join(""),
              }}
            />
            {fieldState?.error && <ErrorInput error={fieldState?.error.message} />}
          </>
        )}
      />
      <p className={s.other}>Имя и фамилия будет использоваться <br /> только в резюме.</p>
    </Flex>
  );
});

export default UserName;