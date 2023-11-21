import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Header = (props) => {
  const navigate = useNavigate()
  return (
   <HeaderContainer>
     <div className='logo'>
    <img src="https://www.shutterstock.com/image-illustration/amd-logo-font-on-dark-260nw-2368094755.jpg"
      alt='no internet connection'
      />
      <span className='company'>Streamy</span>
     </div>
     <button onClick={()=>navigate(props.login ? '/login' : '/signup')}>
      {props.login ? 'Log In ' : 'Sign In'}
     </button>
   </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .logo{
    display: flex;
    justify-content: center;
    align-items: center;
   }
   img{
    margin-left: -10px;
    width: 5rem;
    height: 3rem;
   
    }
    button{
      padding: 0.5rem 1rem;
      background-color: white ;
    
      border: none;
      cursor: pointer;
      color: black;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
    .company {
  font-size: 28px; /* Adjust the font size as needed */
  font-weight: bold; /* Make the text bold if desired */
  color: #e94c42; 
  margin-left:15px;/* Adjust the color as needed */
}
`

export default Header