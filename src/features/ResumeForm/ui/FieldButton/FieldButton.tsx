import s from './FieldButton.module.scss';

export const FieldButton = ({ text, handleClick, disabled }: FieldButton) => {
    return (
        <>
            <button onClick={handleClick} className={`${s.btn} button`} disabled={disabled}>{text}</button>
        </>
    );
}

interface FieldButton {
    text: string,
    handleClick: () => void,
    disabled?: boolean,
}