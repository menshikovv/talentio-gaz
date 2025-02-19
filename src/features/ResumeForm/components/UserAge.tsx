import { Flex } from "antd";
import { InputNumber } from "antd";
import { Controller } from "react-hook-form";
import '@/styles/FormTransitions.scss';
import { memo } from "react";

const UserAge = memo(({ control }: any) => {
    return (
        <Flex vertical gap={10}>
            <Controller 
                name="userAge"
                control={control}
                render={({ field }) => (
                    <InputNumber 
                        min={5} 
                        max={100}
                        placeholder="Введите" 
                        style={{width: '100%', maxWidth: 100}}
                        {...field}
                        onChange={(e) => {
                            field.onChange(e);
                        }}
                    />
                )}
            />
        </Flex>
    );
});

export default UserAge;