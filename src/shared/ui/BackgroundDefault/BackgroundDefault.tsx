'use client'

import './BackgroundDefault.scss';
import { observer } from 'mobx-react-lite';
    
export const BackgroundDefault = observer(() => {
    return (
            <div className="test">
                <div className="background_background__3Oeal">
                    {Array.from({ length: 21 }).map((_, index) => (
                        <span key={index}></span>
                    ))}
                </div>
            </div>
    );
});