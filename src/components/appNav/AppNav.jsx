import { NavLink } from 'react-router-dom'
import './appNav.scss'

const CustomLink = ({to, children, activeIcon}) => {
    return (
        <NavLink to={to}>
            {({isActive}) => (
                <>
                    {isActive ? <img src={activeIcon} alt='active icon' /> : null}
                    {children}
                </>
            )}
        </NavLink>
    )
} 

const AppNav = ({icon, ...props}) => {
    
    return (
        <div className="app__nav">
            <ul className="app__menu">
                <li className='app__list' {...props}>
                    <CustomLink to='/' activeIcon={icon}>
                    Coffee house
                    </CustomLink>
                </li>
                <li className='app__list' {...props}>
                    <CustomLink to='/ourCoffee' activeIcon={icon}>
                    Our coffee
                    </CustomLink>
                </li>
                <li className='app__list' {...props}>
                    <CustomLink to='/yourPleasure' activeIcon={icon}>
                    For your pleasure
                    </CustomLink>
                </li>
            </ul>
        </div>
    )
}
export default AppNav