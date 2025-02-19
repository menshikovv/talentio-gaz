import { useState } from 'react';
import s from './Burger.module.scss';
import { MenuBurger } from '../MenuBurger/MenuBurger';

export const Burger = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
                <div className={s.burger}
                        onClick={() => setIsActive(!isActive)}>
                        <div className={s.bar}></div>
                        <div className={s.bar}></div>
                        <div className={s.bar}></div>
                </div>
                {isActive && <MenuBurger onClose={() => setIsActive(false)}/>}
        </>
    );
}