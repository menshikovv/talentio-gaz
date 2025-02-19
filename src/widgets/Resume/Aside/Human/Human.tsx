import { useUserData } from '@/shared/hooks/useUserData';
import s from './Human.module.scss';
import Image from 'next/image';
import { capitalize } from '@/shared/lib/text/capitalize';
import { formatYear } from '@/shared/lib/text/formatYear';

export const Human = () => {
    const { userNameValue, userSurnameValue, ageValue, userCountry, userCity, userDrections, userWishJobTitle, userWishSalary, userWishSallaryCurrency, userPermission, userTrips, userEmployment, userWorkTime } = useUserData();
    return (
        <div className='relative'>
            <div className={s.avatar__content}>
                <Image src='/photo.jpg' height={300} width={150} alt='avatar' className={s.avatar} />
            </div>
            <h1 className={s.name}>{capitalize(userNameValue)} {capitalize(userSurnameValue)}</h1>
            <h2 className={s.direction}>{capitalize(userDrections)}</h2>
            <div className={s.strip} />
            <div className='flex items-center mb-2'>
                <svg className='w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5 6.09371 8.00993 3 12 3C15.9901 3 19 6.09371 19 9.5C19 11.6449 17.6877 14.0406 15.9606 16.2611C14.5957 18.016 13.0773 19.5329 12 20.5944C10.9227 19.5329 9.40427 18.016 8.03935 16.2611C6.31229 14.0406 5 11.6449 5 9.5ZM12 1C6.99007 1 3 4.90629 3 9.5C3 12.3551 4.68771 15.2094 6.46065 17.4889C7.99487 19.4615 9.7194 21.1574 10.7973 22.2173C10.9831 22.4001 11.1498 22.564 11.2929 22.7071C11.4804 22.8946 11.7348 23 12 23C12.2652 23 12.5196 22.8946 12.7071 22.7071C12.8502 22.564 13.0169 22.4001 13.2027 22.2174L13.2028 22.2173C14.2806 21.1573 16.0051 19.4615 17.5394 17.4889C19.3123 15.2094 21 12.3551 21 9.5C21 4.90629 17.0099 1 12 1ZM12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z" fill="#ffffff"></path> </g></svg>
                <p className={s.place}>{userCountry}, {capitalize(userCity)}</p>
            </div>
            <div className='flex items-center mb-2'>
                <svg className='w-6' fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453.872 453.871"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Layer_8_7_"> <path d="M369.822,42.794h17.744V0H66.305v42.794h17.746v11.105c0,69.716,23.859,133.656,63.155,171.591 c-39.296,37.942-63.155,101.877-63.155,171.596v13.992H66.305v42.793h321.261v-42.793h-17.744v-13.992 c0-69.719-23.863-133.653-63.154-171.596c39.291-37.935,63.154-101.864,63.154-171.591V42.794z M276.738,214.327l-14.735,11.163 l14.735,11.163c36.771,27.885,61.451,84.345,64.71,146.425H112.431c3.257-62.074,27.926-118.534,64.708-146.425l14.727-11.163 l-14.727-11.163c-36.776-27.888-61.451-84.34-64.708-146.42h229.008C338.189,129.987,313.508,186.439,276.738,214.327z M141.955,90.167h169.96c-2.457,47.136-21.202,90.009-49.143,111.183c0,0-4.784,2.066-11.173,8.47 c-13.218,18.876-13.923,87.873-13.945,90.915c9.49,1.013,19.743,5.018,29.904,14.299c35.85,32.755,46.252,36.618,47.503,60.396 H146.965c1.25-23.772,21.646-40.785,47.5-60.396c0,0,12.3-10.795,29.552-13.79c-0.314-0.542-0.498-0.908-0.498-0.908 c0-64.99-21.248-92.857-21.248-92.857l-15.103-8.47C159.236,177.821,144.42,137.304,141.955,90.167z"></path> </g> </g> </g></svg>
                <p className={s.age}>Возраст: {formatYear(ageValue)}</p>
            </div>
            <div style={{marginTop: 20, fontSize: 15}}>
                <strong>Желаемая должность:</strong> <p className="break-words w-full">{capitalize(userWishJobTitle)}</p>
                <strong>Желаемая зарплата:</strong> <p>{userWishSalary?.toLocaleString('ru-RU')}{userWishSallaryCurrency}</p>
                <p className='mt-1'>Готовность к командаривокам: {userTrips ? 'да' : 'нет'}</p>
                <p className='mt-1'>{userPermission ? 'Есть' : 'Нет'} разрешение на работу</p>
                <p className='mt-1'>Занятость: {userEmployment}</p>
                <p className='mt-1'>График работы: {userWorkTime}</p>
            </div>
        </div>
    );
}