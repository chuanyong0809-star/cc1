import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">💪</span>
          <span>肌肉图鉴</span>
        </Link>

        <nav className="header__nav" aria-label="主导航">
          <NavLink
            to="/muscles"
            className={({ isActive }) =>
              `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
            }
          >
            肌肉图鉴
          </NavLink>
          <NavLink
            to="/exercises/1"
            className={({ isActive }) =>
              `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
            }
          >
            动作库
          </NavLink>
        </nav>

        <div className="header__search">
          <button
            className="header__search-btn"
            onClick={() => navigate('/search')}
            aria-label="搜索"
          >
            <svg className="header__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <span>搜索</span>
          </button>
        </div>
      </div>
    </header>
  );
}
