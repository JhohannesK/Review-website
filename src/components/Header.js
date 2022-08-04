import React from 'react';
import style from './header.module.css';

const Header = ({ text }) => {
	return <header className={style.header}>{text}</header>;
};

export default Header;
