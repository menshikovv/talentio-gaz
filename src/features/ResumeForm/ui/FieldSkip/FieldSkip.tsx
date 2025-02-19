import s from './FieldSkip.module.scss';

export const FieldSkip = ({ handleClick }: IFieldSkip) => {
    return (
        <>
            <button className={`${s.btn} button`} onClick={handleClick}>Пропустить</button>
        </>
    );
}

interface IFieldSkip {
    handleClick: () => void,
}