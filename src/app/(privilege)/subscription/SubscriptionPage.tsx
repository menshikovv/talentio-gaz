'use client'

import { Accordion } from '@/widgets/Premium/Accordion/Accordion';
import s from './Subscription.module.scss';
import { Subscription } from '@/widgets/Premium/Subscription/Subscription';
import { fonts } from '@/shared/fonts/fonts';

const SubscriptionPage = () => {
    const font = fonts.montserratAlternates;
    
    return (
        <div className={`container ${s.wrapper} ${font}`}>
            <Subscription />
            <Accordion />
        </div>
    );
}

export default SubscriptionPage;
