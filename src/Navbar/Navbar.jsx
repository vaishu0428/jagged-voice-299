import { Flex, Spacer,Box,Image,Link } from '@chakra-ui/react';
import {useContext} from "react"
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () =>
{
  
 
  return(
    <div style={{borderBottom:"2px solid #e0e0e0" , height:"45px",marginTop:"12px"}}>
    <Box>
 
  <Flex>
    <Box w='110px'  h="60px" marginLeft="25px">
        <Image src='https://www.1mg.com/images/tata_1mg_logo.svg'  />
    </Box>
    {/* <Spacer /> */}
    <Box w='700px' h='10' marginLeft="45px" fontSize="16px" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif" fontWeight={700} textAlign="center" marginTop={2}>
        <Flex>
        <NavLink to="/">MIDICINES</NavLink>
       
        <Spacer />
        
        <NavLink to="/all">LAB TESTS</NavLink>
        <Spacer />
        <Link>CONSULT DOCTORS</Link>
        <Spacer />
        <NavLink  to="/covid">COVID-19</NavLink>
       
        <Spacer />
        <Link>AYURVEDA</Link>
        <Spacer />
        <Link>CARE PLAN
        </Link>
        </Flex>
        </Box>
    {/* <Spacer /> */}
    <Box w='400px' h='10' marginLeft="220px" marginRight="25px" color="#212121" fontSize="14px" textAlign="center" marginTop={2} fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
       <Flex>
       <NavLink to="/login">Log In |</NavLink>
       
        
        
        
        
      
        <Spacer />
        <Link>Offers</Link>
        <Spacer />
        <Spacer />
        <Image src='https://onemg.gumlet.io/cart-icon-rebrand_vp4k0f.svg' h="30px" w="30px"/>
        <Spacer />
        <Spacer />
        <Link >Need Help?</Link>
        </Flex>
       
        </Box>
  </Flex>
  </Box>
  </div>
  )
}
export default Navbar;