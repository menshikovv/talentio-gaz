export const generateAboutItems = (userAbout: string) => {
    return [
        {
            key: 'about-1',
            label: <span style={{ color: 'white', textAlign: 'center', display: 'block' }}>{userAbout}</span>,
        }
    ]
}