import s from '../styles/Edit.module.scss'
import { avatarStore } from "../../../shared/stores/avatarStore/avatarStore";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";

export const Edit = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [temporaryData, setTemporaryData] = useState({
        avatar: avatarStore.avatar,
    });

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setTemporaryData((prevData) => ({ ...prevData, avatar: imageUrl }));
        }
    };

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleNameChange = (newName: string) => setTemporaryData((prevData) => ({ ...prevData, name: newName }))

    const handleSave = (event: React.MouseEvent) => {
        event.preventDefault();
        avatarStore.setAvatar(temporaryData.avatar);
        setMessage("Успешно сохранено!");
        setTimeout(() => setMessage(null), 1500);
    };

    return (
        <form className={s.wrapper}>
            settings
        </form>
    );
};
