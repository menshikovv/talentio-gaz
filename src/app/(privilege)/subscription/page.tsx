import { Metadata } from "next";
import SubscriptionPage from "./SubscriptionPage";

export const metadata: Metadata = {
    title: 'Premium подписка - Talentio',
    description: 'Оформи подписку Talentio, чтобы расширить возможности своих профилей!'
}

const Page = () => {
    return <SubscriptionPage />
}

export default Page;
