import { SUBSCRIPTION, FREE, SILVER, GOLD } from "@/shared/constants/subscriptions";
import CheckMarkCircle from "@/shared/ui/CheckMarkCircle/CheckMarkCircle";
import CrossMarkCircle from "@/shared/ui/CrossMarkCircle/CrossMarkCircle";
import { Button, Tab, Tabs } from "@heroui/react";
import s from './Subscription.module.scss'
import { useState } from "react";
import { priceSuscription } from "@/shared/constants/priceSubscription";
import { GoldIcon } from "@/shared/ui/GoldIcon/GoldIcon";
import { CheckMarkActively } from "@/shared/ui/CheckMarkActively/CheckMarkActively";

const SUBSCRIPTION_TIERS = [
    { name: 'Free', data: FREE, className: s.free },
    { name: 'Silver', data: SILVER, className: s.silver },
    { name: 'Gold', data: GOLD, className: s.gold },
]

export const Subscription = () => {
    const [times, setTimes] = useState<string>('month')

    return (
        <>
            <h1 className='mt-5'>Выйди на новый уровень.</h1>
                    <div className={s.tabs}>
                        <Tabs variant="light" aria-label="Times" color="secondary" size="lg" selectedKey={times} onSelectionChange={(key) => { setTimes(key as string) }}>
                            <Tab key="month" title="На месяц" onClick={() => setTimes('month')}/>
                            <Tab key="year" title="На год" onClick={() => setTimes('year')}/>
                        </Tabs>
                    </div>
                    {times === 'year' && <p className={s.profitable}>Выгодно!</p>}
                <div className={s.cards}>
                    {SUBSCRIPTION_TIERS.map(({ name, data, className }) => (
                        <div key={name} className={`${s.card} ${className} ${name === 'Gold' && s.goldGlow} ${name === 'Silver' && s.silverGlow}`}>
                            <h2>{name}</h2>
                            <ul>
                                {Object.keys(SUBSCRIPTION).map((key) => {
                                    const value = data[key as keyof typeof data];
                                    return (
                                        <li key={key} className={value ? s.active : s.inactive}>
                                            {value === true && <CheckMarkCircle />}
                                            {value === false && <CrossMarkCircle />}
                                            {typeof value === 'string' && (<> <CheckMarkCircle /> {value} </>)}
                                            {typeof value === 'number' && (
                                                <>
                                                    <CheckMarkCircle />
                                                    {value === Infinity ? 'Неограниченное создание' : `${value} профиля`}
                                                </>
                                            )
                                            }
                                            {' ' + SUBSCRIPTION[key as keyof typeof SUBSCRIPTION]}
                                        </li>
                                    )
                                })}
                            </ul>
                            <h2>{priceSuscription[times as keyof typeof priceSuscription][name.toLowerCase() as keyof typeof priceSuscription["month"]]}</h2>
                                <Button color="secondary" variant="shadow" size='lg' className='mt-5' endContent={name === 'Silver' || name === 'Gold' ? <GoldIcon /> : <CheckMarkActively />}>
                                    {name === 'Silver' || name === 'Gold' ? 'ОПЛАТИТЬ' : 'АКТИВНО'}
                                </Button>
                        </div>
                    ))}
                </div>
        </>
    );
}