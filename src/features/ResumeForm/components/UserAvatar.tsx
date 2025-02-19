import { observer } from 'mobx-react-lite';
import s from '../styles/UserAvatar.module.scss'
import { useRef } from 'react';
import { avatarStore } from '@/shared/stores/avatarStore/avatarStore';
import { Controller } from 'react-hook-form';
import Image from 'next/image';

const UserAvatar = observer(({ control }: any) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileType = file.type;
            if (fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/gif' || fileType === 'image/webp') {
                const imageUrl = URL.createObjectURL(file);
                avatarStore.setAvatar(imageUrl);
            } else {
                alert('Пожалуйста, выберите изображение формата JPG, PNG или GIF');
                avatarStore.setAvatar(null);
            }
        }
    }

    return (
        <div className={s.wrapper}>
            <label className={`${s.add} ${avatarStore.avatar && s.hidden} button`}>
                Выбрать
                <Controller 
                    name='userAvatar'
                    control={control}
                    render={({ field }) => (
                        <input {...field} 
                                type="file" 
                                accept="image/jpeg, image/png, image/gif, image/webp"
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                                value={field.value || ''}
                                onChange={(event) => {
                                    handleImageUpload(event);
                                    field.onChange(event);
                                }}
                        />
                    )}
                />
                
            </label>
            {avatarStore.avatar && (
                <div className={s.avatarPreview}>
                    <Image src={avatarStore.avatar} alt="avatar" className={s.image} width={300} height={300}/>
                </div>
            )}
        </div>
    );
})

export default UserAvatar;