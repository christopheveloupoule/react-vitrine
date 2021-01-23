import React from 'react';

const SocialNetwork = () => {

    const anim = () => {
        console.log('yes');

    }

    return (
        <div className="social-network">
            <ul>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li>
                        <i className="fab fa-facebook-f"></i>
                    </li>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li>
                        <i className="fab fa-twitter"></i>
                    </li>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li>
                        <i className="fab fa-instagram"></i>
                    </li>
                </a>
            </ul>

        </div>
    );
}

export default SocialNetwork;
