import s from './NotFoundText.module.scss'

export const NotFoundText = ({text}: INotFoundTextProps) => {
    return (
        <>
            <strong className={s.text}>{text}</strong>
        </>
    );
}

interface INotFoundTextProps {
    text: string
}