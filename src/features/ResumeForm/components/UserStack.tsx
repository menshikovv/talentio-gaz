import { Controller, useFormContext } from "react-hook-form";
import s from '../styles/UserStack.module.scss';
import { memo, useEffect, useState } from "react";
import { Input, Tag } from "antd";
import { FieldButton } from "../ui";

const UserStack = memo(({ control }: IUserStackProps) => {
    const { setValue } = useFormContext();
    const [inputValue, setInputValue] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddTag = () => {
        if (inputValue && !tags.includes(inputValue)) {
            const updatedTags = [...tags, inputValue];
            setTags(updatedTags);
            setInputValue('');
        }
    };

    const handleTagClose = (removedTag: string) => {
        const updatedTags = tags.filter(tag => tag !== removedTag);
        setTags(updatedTags);
    };

    useEffect(() => {
        setValue('userStack', tags);
    }, [tags, setValue]);

    return (
        <div className={s.wrapper}>
            <Controller
                name="userStack"
                control={control}
                render={({ field }) => (
                    <div className={s.inputWrapper}>
                        <div style={{display: 'flex'}}>
                                <Input
                                    {...field}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder="Введите технологию"
                                    className={s.input}
                                    maxLength={20}
                                />
                                <FieldButton text="+" handleClick={handleAddTag} />
                        </div>
                        <div className={s.tagsWrapper}>
                            {tags.map(tag => (
                                <Tag
                                    key={tag}
                                    closable
                                    onClose={() => handleTagClose(tag)}
                                    style={{ margin: 4 }}
                                >
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                    </div>
                )}
            />
        </div>
    );
});

export interface IUserStackProps {
    control?: any,
    width?: boolean
}

export default UserStack;
