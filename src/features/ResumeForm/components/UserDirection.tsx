import { Input } from "antd";
import { Controller,} from "react-hook-form";
import s from '../styles/UserDirection.module.scss';
import { memo } from "react";
import runes from "runes2";

const UserDirection = memo(({ control }: any) => {

    return (
        <div className={s.wrapper}>
            <Controller 
                name="userDirections"
                control={control}
                render={({ field }) => (
                    <Input {...field} 
                        style={{width: '100%'}} 
                        placeholder="Например, Fullstack Developer"
                        count={{
                                max: 40,
                                strategy: (txt) => runes(txt).length,
                                exceedFormatter: (txt, { max }) =>
                                runes(txt).slice(0, max).join(""),
                        }}
                    />
                )}/>
        </div>
    );
});

export default UserDirection;