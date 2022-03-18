import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
    const [isActive, setActive] = useState(false);

    const navToggle = () => {
        setActive(!isActive);
    };

    const navbarToggleEl = useRef();
    const navigationEl = useRef();

    const handleClickOutside = (e) => {
        if (
            !Object.is(e.target, navbarToggleEl.current) &&
            !Object.is(e.target, navigationEl.current) &&
            !navigationEl.current.contains(e.target)
        )
            setActive(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className='navbar'>
            <button
                ref={navbarToggleEl}
                className={'navbar-toggle' + (isActive ? ' active' : '')}
                type='button'
                onClick={navToggle}
            >
                <span className='icon-bar icon-top'></span>
                <span className='icon-bar icon-middle'></span>
                <span className='icon-bar icon-bottom'></span>
            </button>

            <ul
                ref={navigationEl}
                className={'navigation' + (isActive ? ' current' : '')}
            >
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='#' target='_blank' rel='noreferrer'>
                        Repo
                    </a>
                </li>
            </ul>
        </header>
    );
}

export { Header };
