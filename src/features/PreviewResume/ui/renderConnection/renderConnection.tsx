export const renderConnection = (connections: { name: string, date: string }[]) => {
    return (
        <>
            {connections.map((connect: any, index: number) => {
                let href = connect.data;
                if (connect.name === 'Почта') href = `mailto:${connect.data}`
                else if (connect.name === 'Телефон') href = `tel:${connect.data}`

                return (
                <div key={index} style={{marginBottom: 10}}>
                    <a href={href} target="_blank" rel="noopener noreferrer">{connect.name}</a>
                </div>
                )
            })}
        </>
    )
}