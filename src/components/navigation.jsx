import { Link } from "react-router-dom"
import logo from './images/logo.png'

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src={logo} alt="logo" style={{width:160}} />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
            <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about'>
                About
              </Link>
            </li>
            <li>
            <Link to='/services' >
                Services
              </Link>
            </li>
            <li>
            <Link to='/testimonials' >
                Procurement
              </Link>
            </li>
            <li>
            <Link to='/team' >
                Portfolio
              </Link>
            </li>
            <li>
            <Link to='/gallery' >
                Gallery
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  )
}
