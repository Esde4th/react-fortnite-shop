import './Footer.css';

function Footer() {
    return (
        <footer className='foot-cont'>
            <div className='foot-flex-cont'>
                <div className='foot-description'>
                    <h2>react fortnite shop</h2>
                    <p>Pet Project by Elena Sergeeva</p>
                </div>

                <div className='foot-links-cont'>
                    <h2>Links</h2>
                    <ul id='foot-links'>
                        <li>
                            <a href='!#' target='_blank' rel='noreferrer'>
                                REPO
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='copy'>
                    <h4>© {new Date().getFullYear()} by Elena Sergeeva</h4>
                    <a
                        href='https://pngtree.com/freepng/shopping-cart-icon_5060874.html'
                        target='_blank'
                        rel='noreferrer'
                    >
                        © Shopping cart icon by pngtree.com
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
