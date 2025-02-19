import { useUserData } from '@/shared/hooks/useUserData';
import s from './Header.module.scss'
import Image from 'next/image';
import { avatarStore } from '@/shared/stores/avatarStore/avatarStore';
import { handleOpacity } from '../../lib/handleCustom';
import { useSettings } from '@/shared/context/SettingsContext';
import { formatYear } from '@/shared/lib/text/formatYear';
import { COUNTRYS } from '@/shared/constants/countries';
import { IPersonalHeader } from '../../interfaces/IPersonalHeader';
import { Like } from '@/shared/ui/Like/Like';
import { SettingsIcon } from '@/shared/ui/SettingsIcon/SettingsIcon';

export const Header = ({ showSettings, setShowSettings }: IPersonalHeader) => {
    const { isVisibleName, isVisibleAge, isVisibleCountry, opacity, radius, isBlurBlocks, colorFont, rainbowColor } = useSettings();
    const { connectionValue, userDrections, ageValue, userAbout, userCountry, userCity } = useUserData();
    return (
        <div className={s.header} style={{backgroundColor: `rgba(194, 194, 194, ${handleOpacity(opacity)})`, borderRadius: `${radius}px`, backdropFilter: isBlurBlocks ? 'blur(10px)' : 'none'}}>
            <div className={s.avatar}>
                <Image width={100} height={100} src={avatarStore.avatar!} alt='avatar'/>
            </div>
            <div className={s.about} >
                <div className={s.social} >
                    {connectionValue.filter((conect: any) => conect.name === 'Telegram' || conect.name === 'Github').map((conect: any) => ( <a href={conect.data} style={{marginRight: '15px'}}>{conect.name}</a> ))}
                </div>
                <div className={s.title}>
                    <p style={{ 
                        '--rainbow-color': rainbowColor,
                        background: 'var(--rainbow-color)', 
                        backgroundClip: 'text', 
                        backgroundSize: '200%', 
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
            }}>{isVisibleName ? 'menshikov' : ''}, {userDrections} {isVisibleAge ? `, ${formatYear((ageValue))}` : ''}</p>
                </div>
                <div className={s.about__textarea} style={{color: colorFont}}>{userAbout}</div>
                <div className={s.svgContainer}>
                    <div className={s.location}>
                        {isVisibleCountry ? (() => {
                                            const countryData = COUNTRYS.find(c => c.label === userCountry);
                                            return countryData?.logo && (
                                                <>
                                                    <Image
                                                        src={countryData.logo}
                                                        alt={`${userCountry} flag`}
                                                        className={s.flag}
                                                    />
                                                    <p>{userCountry}, {userCity}</p>
                                                </>
                                            )
                        })() : ''}
                    </div>
                    <div className={s.buttons}>
                        <div className={s.settings} onClick={() => setShowSettings(!showSettings)}><SettingsIcon /></div>
                        <div className={s.share}><SettingsIcon /></div>
                        <div className={s.like}><Like /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}