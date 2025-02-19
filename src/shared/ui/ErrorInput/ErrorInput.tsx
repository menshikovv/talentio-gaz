export const ErrorInput = ({ error }: any) => {
    return (
        <p style={{
            color: 'tomato',
            fontSize: 14,
            marginTop: 10,
            textAlign: 'center'
        }}>{error}</p>
    );
}