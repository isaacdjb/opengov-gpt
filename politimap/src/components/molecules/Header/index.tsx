import React, { useContext, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import * as S from './style';
import { ThemeContext } from 'styled-components';
import { darkTheme } from '../../theme';

interface HeaderProps {

}

const Header = ({ }: HeaderProps) => {
	const [isToggleAnimating, setIsToggleAnimating] = useState(false);
	const themeContext = useContext(ThemeContext);

	const handleThemeToggle = () => {
		setIsToggleAnimating(true);
		// Reset animation state after animation completes
		setTimeout(() => {
			setIsToggleAnimating(false);
		}, 300);
	};

	return (
		<S.HeaderContainer>
			<S.NavContainer>
				<S.Brand>
					<S.BrandIcon />
					<S.BrandText>SearchHub</S.BrandText>
					<S.StatusDot />
				</S.Brand>

				<S.NavLinks>
					<S.NavLink href="#">Home</S.NavLink>
					<S.NavLink href="#">Explore</S.NavLink>
					<S.NavLink href="#">About</S.NavLink>
				</S.NavLinks>

				<S.ThemeToggle
					onClick={handleThemeToggle}
					aria-label={themeContext === darkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
					title={themeContext === darkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
				>
					<S.ToggleRipple isAnimating={isToggleAnimating} />
					{themeContext === darkTheme ? <Moon /> : <Sun className="sun-icon" />}
				</S.ThemeToggle>
			</S.NavContainer>
		</S.HeaderContainer>
	);
};

export default Header;