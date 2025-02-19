'use client'

import { GetProp } from "antd";
import { ColorPickerProps } from "antd/es/color-picker";
import { createContext, ReactNode, useContext, useState } from "react";
import { fonts } from "../fonts/fonts";

type FontKey = keyof typeof fonts;

const SettingsContext = createContext<{
    isVisibleName: boolean;
    isVisibleAge: boolean;
    isVisibleCity: boolean;
    isVisibleCountry: boolean;
    isVisibleTg: boolean;
    isVisibleGithub: boolean;
    opacity: number;
    radius: number;
    isBlurBlocks: boolean;
    isBlurThemes: boolean;
    colorFont: string;
    font: FontKey;
    rainbowColor: string;
    setIsVisibleName: (flag: boolean) => void;
    setIsVisibleAge: (flag: boolean) => void;
    setIsVisibleCity: (flag: boolean) => void;
    setIsVisibleCountry: (flag: boolean) => void;
    setOpacity: (opacity: number) => void;
    setRadius: (radius: number) => void;
    setIsBlurBlocks: (flag: boolean) => void;
    setIsVisibleTg: (flag: boolean) => void;
    setIsVisibleGithub: (flag: boolean) => void;
    setIsBlurThemes: (flag: boolean) => void;
    setColorFont: (color: any) => void;
    setFont: (font: FontKey) => void;
    setRainbowColor: (color: string) => void;
}>({
    isVisibleName: true,
    isVisibleAge: true,
    isVisibleCity: true,
    isVisibleCountry: true,
    isVisibleTg: true,
    isVisibleGithub: true,
    opacity: 0.079,
    radius: 25,
    isBlurBlocks: false,
    isBlurThemes: false,
    colorFont: '#ffffff',
    font: 'montserratAlternates',
    rainbowColor: '',
    setIsVisibleName: () => {},
    setIsVisibleAge: () => {},
    setIsVisibleCity: () => {},
    setIsVisibleCountry: () => {},
    setOpacity: () => {},
    setRadius: () => {},
    setIsBlurBlocks: () => {},
    setIsVisibleTg: () => {},
    setIsVisibleGithub: () => {},
    setIsBlurThemes: () => {},
    setColorFont: () => {},
    setFont: () => {},
    setRainbowColor: () => {},
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
    const [isVisibleName, setIsVisibleName] = useState<boolean>(true);
    const [isVisibleAge, setIsVisibleAge] = useState<boolean>(true);
    const [isVisibleCity, setIsVisibleCity] = useState<boolean>(true);
    const [isVisibleTg, setIsVisibleTg] = useState<boolean>(true);
    const [isVisibleGithub, setIsVisibleGithub] = useState<boolean>(true);
    const [isVisibleCountry, setIsVisibleCountry] = useState<boolean>(true);
    const [opacity, setOpacity] = useState<number>(10);
    const [radius, setRadius]= useState<number>(25);
    const [isBlurBlocks, setIsBlurBlocks] = useState<boolean>(false);
    const [isBlurThemes, setIsBlurThemes] = useState<boolean>(false);
    const [colorFont, setColorFont] = useState<string>('#ffffff');
    const [font, setFont] = useState<FontKey>('montserratAlternates');
    const [rainbowColor, setRainbowColor] = useState<string>('white');
    

    return (
        <SettingsContext.Provider value={{ isVisibleName, isVisibleAge, isVisibleCity, isVisibleCountry, setIsVisibleName, setIsVisibleAge, setIsVisibleCity, setIsVisibleCountry, opacity, setOpacity, radius, setRadius, isBlurBlocks, setIsBlurBlocks, isVisibleTg, setIsVisibleTg, isBlurThemes, setIsBlurThemes, isVisibleGithub, setIsVisibleGithub, colorFont, setColorFont, font, setFont, rainbowColor, setRainbowColor }}>
            {children}
        </SettingsContext.Provider>
    )
};

export const useSettings = () => {
    return useContext(SettingsContext);
};