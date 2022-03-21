import React from 'react';
import { Container, Logo } from '../../Theme/Styled';
import { FooterHolder, MenuRow, MenuItemsHolder, MenuItem, SubMenuItemsHolder, SubMenuItem, Address, ContactNumber, Email, CopyRight, Separator } from './Styled';

const data = {
    name: 'FastCo',
    address: 'Office #: 2/16-7TH Fl, Nawader Al-Zahur bldg, King Abdulaziz Rd., Al-Khobar',
    contactNum: '+966 3 895 4364 / 894 8266',
    email: 'info@fastco.sa.com',
    copyRights: '© 2021 FUAD ABDULLAH AL SUWAIKET TRADING EST.(FASTCO). All Rights Reserved.'
}

const Footer = ({ menu }) => {
    menu = menu.filter((m) => m.type !== 'logo');
    return (
        <FooterHolder>
            <Container>
                <MenuRow>
                    <Logo>{data.name}</Logo>
                    <MenuItemsHolder>
                        {menu.map((m) => {
                            if (m.submenu.length > 1) {
                                return (
                                    <MenuItem key={m.title} to={m.title.replace(/\s/g, '')}>
                                        {m.title}
                                        <SubMenuItemsHolder>
                                            {m.submenu.map((s) =>
                                                <SubMenuItem
                                                    key={s}
                                                    to={`/${m.title.replace(/\s/g, '')}?service=${s.replace(/\s/g, '')}`}
                                                >
                                                    {s}
                                                </SubMenuItem>
                                            )}
                                        </SubMenuItemsHolder>
                                    </MenuItem>)
                            } else {
                                if (m.title === 'Home') {
                                    return (
                                        <MenuItem key={m.title} to="/">
                                            {m.title}
                                        </MenuItem>
                                    )
                                } else {
                                    return (
                                        <MenuItem key={m.title} href={`/#${m.title.replace(/\s/g, '')}`}>
                                            {m.title}
                                        </MenuItem>
                                    )
                                }
                            }
                        }
                        )}
                    </MenuItemsHolder>
                </MenuRow>
                <Separator />
                <Address>{data.address}</Address>
                <ContactNumber>{data.contactNum}</ContactNumber>
                <Email>{data.email}</Email>
                <Separator />
                <CopyRight>{data.copyRights}</CopyRight>
            </Container>
        </FooterHolder>
    );
}

export default Footer;