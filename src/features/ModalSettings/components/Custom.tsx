'use client';

import { observer } from 'mobx-react-lite';
import { Themes } from '@/widgets/PersonalSettings/Themes/Themes';
import { Blocks } from '@/widgets/PersonalSettings/Blocks/Blocks';
import { Text } from '@/widgets/PersonalSettings/Text/Text';
import { Background } from '@/widgets/PersonalSettings/Background/Background';
import { Extra } from '@/widgets/PersonalSettings/Extra/Extra';

export const Custom = observer(() => {
    return (
        <div>
            <Themes />
            <Blocks />
            <Text />
            <Background />
            <Extra />
        </div>
    );
});