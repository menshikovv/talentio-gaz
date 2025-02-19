import { useUserData } from "@/shared/hooks/useUserData";

export const Skills = () => {
    const { stackValue } = useUserData();
    return (
        <>
            <h1 className='titleResumeAside'>НАВЫКИ</h1>
            <ul>
                {stackValue.map((stack: any) => (
                    <li className="flex items-center mt-2" key={stack}>
                        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="2" fill="#ffffff"></circle> </g></svg>
                        {stack}
                    </li>
                ))}
            </ul>
        </>
    );
}