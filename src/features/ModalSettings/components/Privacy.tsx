import { useSettings } from '@/shared/context/SettingsContext';
import { Switch } from 'antd';

export const Privacy = () => {
    const { 
        setIsVisibleName, 
        setIsVisibleAge, 
        setIsVisibleCity, 
        setIsVisibleCountry,
        setIsVisibleGithub,
        setIsVisibleTg,
        isVisibleName, 
        isVisibleAge, 
        isVisibleCountry, 
        isVisibleCity,
        isVisibleTg,
        isVisibleGithub,
    } = useSettings();

    return (
        <div>
            <h2 style={{ marginBottom: 20, fontSize: 18 }}>Приватность</h2>
            <div style={{ display: 'flex' }}>
                <p style={{ marginRight: 20, marginBottom: 5, fontSize: 15 }}>Показывать имя</p>
                <Switch 
                    checked={isVisibleName} 
                    onChange={() => setIsVisibleName(!isVisibleName)} 
                />
            </div>
            <div style={{ display: 'flex' }}>
                <p style={{ marginRight: 20, marginBottom: 5, fontSize: 15 }}>Показывать возраст</p>
                <Switch 
                    checked={isVisibleAge} 
                    onChange={() => setIsVisibleAge(!isVisibleAge)} 
                />
            </div>
            <div style={{ display: 'flex' }}>
                <p style={{ marginRight: 20, marginBottom: 5, fontSize: 15 }}>Показывать страну</p>
                <Switch 
                    checked={isVisibleCountry} 
                    onChange={() => setIsVisibleCountry(!isVisibleCountry)} 
                />
            </div>
            <div style={{ display: 'flex' }}>
                <p style={{ marginRight: 20, marginBottom: 5, fontSize: 15 }}>Показывать город</p>
                <Switch 
                    checked={isVisibleCity} 
                    onChange={() => setIsVisibleCity(!isVisibleCity)} 
                />
            </div>
            <div style={{ display: 'flex' }}>
                <p style={{ marginRight: 20, marginBottom: 5, fontSize: 15 }}>Показывать Telegram</p>
                <Switch 
                    checked={isVisibleTg} 
                    onChange={() => setIsVisibleTg(!isVisibleTg)} 
                />
            </div>
            <div style={{ display: 'flex' }}>
                <p style={{ marginRight: 20, marginBottom: 5, fontSize: 15 }}>Показывать GitHub</p>
                <Switch 
                    checked={isVisibleGithub} 
                    onChange={() => setIsVisibleGithub(!isVisibleGithub)} 
                />
            </div>
        </div>
    );
};
