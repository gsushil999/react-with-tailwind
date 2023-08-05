import { useEffect, useState } from "react";
import ThemeLogo from '../../assets/white-logo.svg';
const THEME_OPTION = [
    {value: '', text: '--Select Theme--'},
    {value: 'dark', text: 'Dark'},
    {value: 'light', text: 'Light'},
];
const NAV_OPTIONS = ['Home', 'Services'];
const Header = () => {
    const [themeName, setThemeName] = useState('light');
    const [currentSection, setCurrentSection] = useState('Home');

    const onChangeTheme = (event) => {
        const themeValue = event.target.value;
        setThemeName(themeValue);
        localStorage.pageTheme = themeValue;
        if(themeValue === 'default'){
            localStorage.removeItem("theme");
        }
    }

    const handleScroll = (elem) => {
        const targetElement = document.getElementById(elem);
        const offsetTop = targetElement.offsetTop;
        if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              yOffset:offsetTop
            });
        }
        setCurrentSection(elem);
    }

    
    useEffect(()=> {
        if (('pageTheme' in localStorage) && localStorage.pageTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [themeName]);

    return <>
          <header className="w-full py-3 fixed bg-blue z-10 h-[94px] flex content-center dark:bg-dark">
            <div className="container m-auto">
                <nav className="w-full flex justify-between items-center">
                    <a className="navbar-brand" href="index.html">
                        <img src={ThemeLogo} alt="Logo" />
                    </a>
                
                    <ul className="flex">
                        {
                            NAV_OPTIONS.map((nav, index)=>(
                                <li key={index}>
                                    <a className={`font-medium px-4 py-3 my-4 text-white opacity-70 cursor-pointer hover:opacity-100 ${currentSection == nav ? 'opacity-100': ''}`} onClick={()=> handleScroll(nav)}>{nav}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="">
                        <select className="custom-select" onChange={onChangeTheme}>
                            {
                                THEME_OPTION.map((theme, index)=>(
                                    <option key={index} disabled={index == 0} value={theme.value}>{theme.text}</option>
                                ))
                            }
                        </select>
                    </div>
                </nav>
            </div>
        </header>
    </>
}
export default Header;