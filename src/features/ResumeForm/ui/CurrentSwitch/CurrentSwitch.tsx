import { Switch } from "antd";
import { Controller } from "react-hook-form";
import s from './CurrentSwitch.module.scss'

export const CurrentSwitch = ({ control, index, setValue }: any) => {
    return (
        <div className={s.now}>
            <Controller
                name={`userExperience.${index}.isCurrent`}
                control={control}
                defaultValue={true}
                render={({ field }) => (
                    <>
                        <Switch 
                            checked={field.value} 
                            onChange={(e) => {
                                field.onChange(e);
                                setValue(
                                    `userExperience.${index}.showEndDate`, !e
                                );

                                if (e) {
                                    setValue(`userExperience.${index}.endDateMonth`, null);
                                    setValue(`userExperience.${index}.endDateYear`, null);
                                }
                            }} 
                        />
                        <p style={{marginLeft: 20}}>По настоящее время</p>
                    </>
                )}
            />
        </div>
    );
}