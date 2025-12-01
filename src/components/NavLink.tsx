import type React from "react";


interface NavLinkProps{
    children?: React.ReactNode
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

function NavLink({href, children, onClick}: NavLinkProps) {
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        onClick?.(e);
    }

    return(
        <a className="text-(--main-text) hover:text-(--second-text)" href={href} onClick={handleClick}>{children}</a>
    )
}

export default NavLink;