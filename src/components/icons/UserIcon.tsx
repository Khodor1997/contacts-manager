import { FC } from "react";

type TProps = {
    className?: string
}

const UserIcon:FC<TProps> = ({className}) => {
    return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.33332C11.841 8.33332 13.3333 6.84094 13.3333 4.99999C13.3333 3.15904 11.841 1.66666 10 1.66666C8.15906 1.66666 6.66667 3.15904 6.66667 4.99999C6.66667 6.84094 8.15906 8.33332 10 8.33332Z" stroke-width="1.5"/>
            <path d="M16.6646 15C16.6667 14.8632 16.6667 14.7242 16.6667 14.5833C16.6667 12.5123 13.6819 10.8333 10 10.8333C6.3181 10.8333 3.33334 12.5123 3.33334 14.5833C3.33334 16.6544 3.33334 18.3333 10 18.3333C11.8592 18.3333 13.1998 18.2028 14.1667 17.9695" stroke-width="1.5" stroke-linecap="round"/>
        </svg>

    )
};

export default UserIcon;