import { h } from 'preact';
import classNames from 'classnames';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={classNames(style.header, 'main-wrapper')}>
		<h1>Journaling</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
		</nav>
	</header>
);

export default Header;
