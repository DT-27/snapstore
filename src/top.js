import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchContext } from './SearchContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, StyledNavLink, NavMenu, MobileIcon, Search } from './NavbarElements';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 30;

const Top = () => {
  const { searchQuery, setSearchQuery } = useSearchContext();
  const [click, setClick] = useState(false);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search value:', searchQuery);
    fetchImages();
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get(`
        ${API_URL}?query=${searchQuery}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=your_access_key
      `);

      // Handle the response and update the images state
      console.log('Search results:', response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const closeMenu = () => {
      setClick(false);
    };

    if (click) {
      document.addEventListener('click', closeMenu);
    }

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [click]);

  return (
    <>
      <div className='bar'>
        <h1 className='title'>Snap store</h1>
        <div className='bof'>
          <input
            className='AccBar'
            type='text'
            value={searchQuery}
            onChange={handleInputChange}
            placeholder='Search...'
          />
          <Nav>
            <Search onClick={handleClick} click={click}>
              <StyledNavLink to='/'>
                <button onClick={handleSearch} className='search-button'>
                  🔎
                </button>
              </StyledNavLink>
            </Search>
          </Nav>
        </div>
      </div>

      <Nav>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavMenu onClick={handleClick} click={click}>
          <StyledNavLink to='/Animals'>Animals</StyledNavLink>
          <StyledNavLink to='/Flowers'>Flowers</StyledNavLink>
          <StyledNavLink to='/Food'>Food</StyledNavLink>
          <StyledNavLink to='/Landscape'>Landscape</StyledNavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Top;
