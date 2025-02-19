import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
    title: 'Регистрация аккаунта - Talentio',
    description: 'Зарегистрируйтесь, чтобы пользоваться Talentio.'
}

const Page = () => {
    return <ClientPage />
}

export default Page;
