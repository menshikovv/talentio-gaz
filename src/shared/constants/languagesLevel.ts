import { a1Logo, a2Logo, b1Logo, b2Logo, c1Logo, c2Logo, nativeLogo } from "../../../public/assets/logos-emoji";

export const LANGUAGE_LEVEL = [
    {
        label: 'А1',
        value: 'a1',
        logo: a1Logo
    },
    {
        label: 'А2',
        value: 'a2',
        logo: a2Logo,
    },
    {
        label: 'В1',
        value: 'b1',
        logo: b1Logo,
    },
    {
        label: 'В2',
        value: 'b2',
        logo: b2Logo,
    },
    {
        label: 'С1',
        value: 'c1',
        logo: c1Logo,
    },
    {
        label: 'С2',
        value: 'c2',
        logo: c2Logo,
    },
    {
        label: 'Родной',
        value: 'родной',
        logo: nativeLogo,
    }
]

export const LEVEL_PROGRESS: Record<string, number> = {
    "А1": 20,
    "А2": 35,
    "В1": 50,
    "В2": 65,
    "С1": 80,
    "С2": 90,
    "Родной": 100,
};