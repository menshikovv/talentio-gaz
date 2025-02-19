import { Radio, Switch, Tooltip } from 'antd';
import s from './Blocks.module.scss';
import { useSettings } from '@/shared/context/SettingsContext';

export const Blocks = () => {
    const { radius, setRadius, opacity, setOpacity, setIsBlurBlocks, isBlurBlocks } = useSettings();
    return (
        <>
            <h2 style={{marginTop: 15, marginBottom: 10, fontSize: 24}}>Блоки</h2>
                <div className={s.opacity}>
                    <h3>Прозрачность блоков</h3>
                    <Radio.Group value={opacity} onChange={e => setOpacity(e.target.value)} defaultValue={10} style={{marginLeft: 10}}>
                        <Radio value={0}>0%</Radio>
                        <Radio value={10}>10%</Radio>
                        <Radio value={25}>25%</Radio>
                        <Radio value={45}>45%</Radio>
                    </Radio.Group>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h3 className='text-xs'>Закругление блоков</h3>
                    <Radio.Group style={{marginLeft: 25}} value={radius} onChange={e => setRadius(e.target.value)} defaultValue={25}>
                        <Radio value={0}>0%</Radio>
                        <Radio value={10}>10%</Radio>
                        <Radio value={25}>25%</Radio>
                        <Radio value={45}>45%</Radio>
                    </Radio.Group>
                </div>
                <div className='flex items-center mt-2'>
                <Tooltip title="Применяется к блокам">
                    <h3 style={{fontSize: 15, marginRight: 20, textDecoration: 'underline', fontWeight: 600}}>Блюр</h3>
                </Tooltip>
                <Switch onChange={() => setIsBlurBlocks(!isBlurBlocks)} checked={isBlurBlocks} />
            </div>
        </>
    );
}