import React from 'react'

const links = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Map' },
    { id: 3, name: 'Coupons' },
    { id: 4, name: 'About Us'}
]

const Menu = ({ isOpen }) => {
    return (
        <div className={isOpen ? 'styled-menu menu-open' : 'styled-menu'}>
            <div className='links'>
                {
                    links.map((link) => (
                        <span key={link.id}>{link.name}</span>
                    ))
                }
            </div>

            <div className='social'>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Linkedin</p>
            </div>
        </div>
    )
}

export default Menu