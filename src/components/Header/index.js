import React, { useState } from 'react';
import { Logo } from '../../Theme/Styled';
import { Holder, MenuItemLink, MenuItemDD, ArrowIcon, DDMenu, DDMenuItem } from './Styled';

const Header = ({ menu }) => {
    const [showSubmenu, setshowSubmenu] = useState('');
    return (
        <Holder>
            {menu.map((m) => {
                if (m.type === 'logo') {
                    return <Logo key={m.sequence} dark padded>{m.title}</Logo>
                } else {
                    if (m.submenu.length > 1) {
                        return (
                            <MenuItemDD
                                key={m.sequence}
                                onClick={() => {
                                    if (showSubmenu === '' || showSubmenu !== m.title) {
                                        setshowSubmenu(m.title)
                                    } else {
                                        setshowSubmenu('')
                                    }
                                }}
                            >
                                {m.title}
                                <ArrowIcon open={showSubmenu !== m.title}>expand_more</ArrowIcon>
                                <DDMenu show={showSubmenu === m.title}>{m.submenu.map((s) =>
                                    <DDMenuItem
                                        key={s}
                                        to={`/${m.title.replace(/\s/g, '')}?service=${s.replace(/\s/g, '')}`}
                                    >
                                        <div>{s}</div>
                                    </DDMenuItem>)}
                                </DDMenu>
                            </MenuItemDD>
                        );
                    } else {
                        if (m.title === 'Home') {
                            return <MenuItemLink key={m.sequence} to={'/'}>{m.title}</MenuItemLink>
                        }
                        else {
                            return <MenuItemLink key={m.sequence} href={`/#${m.title.replace(/\s/g, '')}`}>{m.title}</MenuItemLink>
                        }
                    }
                }
            })}
        </Holder>
    )
}

export default Header;