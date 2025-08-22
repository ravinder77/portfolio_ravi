import React from 'react';

const Li: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({
                                                                               children,
                                                                               onClick,
                                                                           }) => {
    return (
        <li
            onClick={onClick}
            className='relative px-1 py-2 font-medium overflow-hidden cursor-pointer group'
        >
            <span className='relative z-10'>{children}</span>
            <div
                className='absolute inset-0 border-b-2 border-primaryYellow w-0 group-hover:w-full transition-all duration-300 ease-in-out'></div>
        </li>
    );
};

interface HeaderProps {
    homeRef: React.RefObject<HTMLDivElement>,
    servicesRef: React.RefObject<HTMLDivElement>,
    contactRef: React.RefObject<HTMLDivElement>,
    projectRef: React.RefObject<HTMLDivElement>,

}


const Header: React.FC<HeaderProps> = ({homeRef, servicesRef, contactRef, projectRef}) => {

    const scrollToView = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <header className='w-full py-4'>
            <nav className=' flex items-center justify-between'>
                <a
                    href='#'
                    className='text-3xl font-bold bg-gradient-to-tr from-primaryYellow to-primaryWhite text-transparent bg-clip-text '
                >
                    ravinder
                </a>
                <ul className=' gap-10 hidden md:flex'>
                    <Li onClick={() => scrollToView(homeRef)}>Home</Li>
                    <Li onClick={() => scrollToView(servicesRef)}>Services</Li>
                    <Li onClick={() => scrollToView(projectRef)}>Projects</Li>
                </ul>
                <button
                    type='button'
                    onClick={() => scrollToView(contactRef)}
                    className='relative overflow-hidden text-primaryYellow hover:text-primaryBlack border-[1px] border-primaryYellow px-6 shadow-sm shadow-primaryYellow font-medium  py-2 capitalize rounded-3xl group transition-all duration-200 ease-in-out'
                >
                    <span className='relative z-10 '>hire me</span>
                    <div
                        className='absolute inset-0 z-1  bg-primaryYellow w-0 group-hover:w-full transition-all duration-300 ease-in-out'></div>
                </button>
            </nav>
        </header>
    );
};

export default Header;
