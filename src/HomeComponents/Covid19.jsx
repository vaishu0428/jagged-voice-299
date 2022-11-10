import Navbar from "../Navbar/Navbar";
import {Flex,Box,Image, Spacer,Heading,Text,Button} from "@chakra-ui/react"
const Covid19 = () =>
{
  return(
    <div>
        <Navbar />
        <Navbar />
        {/* first add */}
        <div style={{height:"500px" ,backgroundColor:"#FDF0DF",padding:"60px"}}>
             <div style={{width:"90%",margin:"auto"}}>
                  <Flex>
                    <Box w="50%" textAlign="left"  fontFamilt="Poppins">
                    <Heading as='h2' size='2xl' paddingTop="8px" fontWeight={700} color="#3b3b3b"> Combating Coronavirusin in India  </Heading>
                    <Text color="#767676" fontSize="1.25vw" lineHeight={1.4} paddingTop="13px" fontWeight="bold" paddingBottom="20px" borderBottom="3px solid #3b3b3b">As we are staring at a potential rise of coronavirus in India, <span style={{fontWeight:"bold",color:"#3b3b3b"}}>testing, tracing</span> and <span style={{fontWeight:"bold",color:"#3b3b3b"}}>treating</span> is the ideal way of curbing this spread. Testing on time helps provide early treatment which, in turn, prevents the spread to your loved ones and others around you. </Text>
                    <Heading as='h4' size='md' color="#767676" paddingTop="15px"> Experiencing COVID-like symptoms? To book a COVID-19 test at home, call on </Heading>
                    <Heading as='h2' size='2xl' color="#3b3b3b" fontWeight="bold" paddingTop="15px"> 1800 - 212 - 2352</Heading>
                    </Box>
                    <Spacer />
                    <Box w="45%" m="auto" h="100%">
                        <Image src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/img-head.png" h="350px" w="580px"></Image>
                    </Box>
                  </Flex>
             </div>
        </div>

      {/* Adver */}
                 <div style={{width:"90%",margin:"auto",backgroundColor:"#FDF0DF",height:"300px" ,marginTop:"60px",marginBottom:'60px',paddingLeft:"20px"}}>
                    <Flex>
                        <Box textAlign="left"  fontFamilt="Poppins" paddingBottom="20px" w="50%" paddingTop="20px">
                        <Heading as='h3' size='2xl' paddingTop="8px" fontWeight={700} color="#3b3b3b" > COVID-19 RT-PCR test  </Heading> 
                        <Heading as='h2' size='lg' color="#3b3b3b" fontSize="1.8vw" marginTop="15px" lineHeight="40px">Gold standard test to detect active coronavirus infection </Heading>
                        <Button backgroundColor="#ff6f61" color="#fff" textAlign="center" cursor="pointer" paddingLeft="130px" paddingRight="130px" h="50px" marginTop="30px"><span style={{fontWeight:"bold"}}>BOOK NOW</span></Button>
                        </Box>
                        <Spacer />
                        <Box >
                               <Image src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/rtpcr.png" h="100%" w="450px"></Image>
                        </Box>
                        </Flex>
                 </div>

{/*  */}
                <div style={{width:"90%",margin:"auto" ,marginBottom:"20px"}}>
                    <Heading textAlign="left">COVID Essentials: Everything you need </Heading>
                </div>
{/*  */}
                <div style={{width:"90%",margin:"auto" ,marginBottom:"20px"}}>
                    <Flex>
                       <Box>
                        <Image src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/cold-cough.png" />
                       </Box>
                       <Spacer />
                       <Box>
                       <Image src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/track-your-vitals.png" />
                       </Box>
                       <Spacer />
                       <Box>
                       <Image src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand-wash.png" h="470px" w="435px" />
                       </Box>
                    </Flex>
                </div>
{/*  */}
<div style={{width:"90%",margin:"auto" ,marginBottom:"20px"}}>
                    <Flex>
                       <Box>
                        <Image src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/mask&face.png" h="470px" w="435px"/>
                       </Box>
                       <Spacer />
                       <Box>
                       <Image src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/immunity.png" h="470px" w="435px"/>
                       </Box>
                       <Spacer />
                       <Box>
                       <Image src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/disinfectants.png" h="470px" w="435px"/>
                       </Box>
                    </Flex>
                </div>






    </div>
  )
}
export default Covid19;