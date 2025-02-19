import { iconsMap } from "@/shared/constants/connectionIconsMap";

export const renderConnection = (connections: { name: string, date: string }[]) => {
    return (
        <>
            {connections.map((connect: any, index: number) => {
                let href = connect.data;
                if (connect.name === 'Почта') href = `mailto:${connect.data}`
                else if (connect.name === 'Телефон') href = `tel:${connect.data}`
                else if (connect.name === "Telegram") href = `https://t.me/${connect.data}`;
                else if (connect.name === 'ВКонтакте') href = `https://vk.com/${connect.data}`
                else if (connect.name === 'Github') href = `https://github.com/${connect.data}`

                return (
                    <a key={index} href={href} className="flex items-center mt-2" target="_blank" rel="noopener noreferrer">
                        {iconsMap[connect.name]}
                        {connect.name}
                    </a>
                )
            })}
        </>
    )
}