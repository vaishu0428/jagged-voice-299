import Navbar from "../Navbar/Navbar";
import {Flex,Box,Image, Spacer,Heading,Text,Button} from "@chakra-ui/react"
import VideoData from "../Components/Video";
import Footer from "../Navbar/Footer";
import Select1 from "../Components/Select";
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

{/*  */}               
<div style={{width:"85%",margin:"auto" ,marginBottom:"30px",marginTop:"40px"}}>
                    <Heading textAlign="left">COVID Management & Home Care Tests </Heading>
                </div>        


                  <div style={{width:"90%",margin:"auto",height:"600px",textAlign:"left",fontFamily:"Poppins"}}>
                    <Flex>
                         <Box h="600px" w="32%"  paddingTop="15px" paddingRight="15px" paddingLeft="15px" backgroundColor="#FBEAF0" borderRadius="10px">
                          <Heading paddingTop="10px" paddingBottom="10px" borderBottom="5px solid #993859" color="#993859">COVID Antibody IgG (Quantitative) </Heading>
                          <Text paddingTop="10px" paddingBottom="10px" fontSize="1.5vw"  lineHeight="25px" borderBottom="2px solid #993859" color="#993859">The Antibody Test detects any past occurrence of the infection by looking for COVID-19 antibodies </Text>
                          <Text color="#993859" paddingTop="10px" paddingBottom="10px" fontSize="1.7vw" fontWeight="bold">Who should take the test ? </Text>
                          <div style={{width:"80%" ,margin:"auto",height:"250px"}}>
                            <ul style={{color:"#993859",fontSize:"1.2vw",fontWeight:"bold",lineHeight:"25px"}}>
                                  <li>Think you contracted the coronavirus in the past and have already recovered</li>
                                  <li>Want to know if your body has encountered the infection and made antibodies against the coronavirus</li>
                                  <li>Have recovered from COVID-19 and want to help people who need plasma therapy</li>
                            </ul>
                          </div>
                          
                         </Box>
                         <Spacer />
                         <Box h="600px" w="32%" borderRadius="10px" padding="15px" backgroundColor="#EFFFF5">
                         <Heading paddingTop="10px" paddingBottom="10px" borderBottom="5px solid #4B5E4C" color="#4B5E4C">Covid Home Care Essential  </Heading>
                          <Text paddingTop="10px" paddingBottom="10px" fontSize="1.5vw"  lineHeight="25px" borderBottom="2px solid #4B5E4C" color="#4B5E4C">The COVID Home Care Essential package offers 33 tests (Includes CRP, CBC with NLR, ESR, BUN and more) that give important clues about the various health parameters.  </Text>
                          <Text color="#4B5E4C" paddingTop="10px" paddingBottom="10px" fontSize="1.7vw" fontWeight="bold">This test is recommended if you: </Text>
                          <div style={{width:"80%" ,margin:"auto",height:"250px"}}>
                            <ul style={{color:"#4B5E4C",fontSize:"1.2vw",fontWeight:"bold",lineHeight:"25px"}}>
                                  <li>Have been diagnosed with COVID-19 and need to understand how COVID-19 has impacted your health</li>
                                  <li>Are getting COVID-19 care at home and notice any worsening of the symptoms</li>
                                  <li>Have been advised by the doctor to check your biomarkers</li>
                            </ul>
                          </div>
                         </Box>
                         <Spacer />
                         <Box h="600px" w="32%"  padding="15px" backgroundColor="#fdedbe" borderRadius="10px">
                         <Heading paddingTop="10px" paddingBottom="10px" borderBottom="5px solid #72582e" color="#72582e">COVID Home Care Complete  </Heading>
                          <Text paddingTop="10px" paddingBottom="10px" fontSize="1.5vw"  lineHeight="25px" borderBottom="2px solid #72582e" color="#72582e">The COVID Home Care Complete package offers 41 tests (Includes D-Dimer, IL-6, HbA1c, Serum electrolytes, etc., in addition to CRP, CBC with NLR, ESR, and more) that give important clues about the various health parameters.  </Text>
                          <Text color="#72582e" paddingTop="10px" paddingBottom="10px" fontSize="1.7vw" fontWeight="bold">This test is recommended if you:</Text>
                          <div style={{width:"80%" ,margin:"auto" ,height:"250px"}}>
                            <ul style={{color:"#72582e",fontSize:"1.2vw",fontWeight:"bold",lineHeight:"25px"}}>
                                  <li>Have been diagnosed with COVID-19 and need to understand how COVID-19 has impacted your health</li>
                                  <li>Are getting COVID-19 care at home and notice any worsening of the symptoms</li>
                                  <li>Have been advised by the doctor to check your biomarkers</li>
                            </ul>
                          </div>
                         </Box>
                    </Flex>
                  </div>
{/*  Covid19 latext treatment*/}
<div style={{width:"90%",margin:"auto",backgroundColor:"#FDF0DF",height:"300px" ,marginTop:"60px",marginBottom:'60px',paddingLeft:"20px"}}>
                    <Flex>
                        <Box textAlign="left"  fontFamilt="Poppins" paddingBottom="20px" w="60%" paddingTop="20px">
                        <Heading as='h3' size='xl' paddingTop="8px" fontWeight={700} color="#3b3b3b" > COVID-19 & latest treatment modalities </Heading> 
                        <Text color="#767676" fontSize="1.3vw" marginTop="15px" lineHeight="25px">To prepare for the imminent threats of this virus, scientists and researchers are constantly developing newer treatment strategies. One such new treatment option includes monoclonal antibodies. Want to know more about these available treatments and how they work against COVID variants, including Delta and Omicron?  </Text>
                        <Button backgroundColor="#ff6f61" color="#fff" textAlign="center" cursor="pointer" paddingLeft="130px" paddingRight="130px" h="50px" marginTop="30px"><span style={{fontWeight:"bold"}}>READ THIS ARTICLE</span></Button>
                        </Box>
                        <Spacer />
                        <Box >
                               <Image src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/hand.png" h="60%" w="430px" marginTop="20px"></Image>
                        </Box>
                        </Flex>
                 </div>
                 {/* Find it hre article */}

                 <div style={{width:"90%",margin:"auto",backgroundColor:"#FDF0DF",height:"300px" ,marginTop:"60px",marginBottom:'60px',paddingLeft:"20px"}}>
                    <Flex>
                        <Box textAlign="left"  fontFamilt="Poppins" paddingBottom="20px" w="60%" paddingTop="20px">
                        <Heading as='h3' size='xl' paddingTop="30px" fontWeight={700} color="#3b3b3b" > Has your doctor prescribed COVID treatment based on monoclonal antibodies? </Heading> 
                        
                        <Button backgroundColor="#ff6f61" color="#fff" textAlign="center" cursor="pointer" paddingLeft="130px" paddingRight="130px" h="50px" marginTop="50px"><span style={{fontWeight:"bold"}}>FIND IT HERE</span></Button>
                        </Box>
                        <Spacer />
                        <Box >
                               <Image src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/monoclonal_dweb.png" h="60%" w="430px" marginTop="20px"></Image>
                        </Box>
                        </Flex>
                 </div>
                 {/* Think you may have */}
                 <div style={{width:"90%",margin:"auto",backgroundColor:"#FDF0DF",height:"300px" ,marginTop:"60px",marginBottom:'60px',paddingLeft:"20px"}}>
                    <Flex>
                        <Box textAlign="left"  fontFamilt="Poppins" paddingBottom="20px" w="60%" paddingTop="20px">
                        <Heading as='h3' size='xl' paddingTop="15px" fontWeight={700} color="#3b3b3b" > Think you may have COVID-19? </Heading> 
                        <Text  fontSize="2.2vw" marginTop="15px" lineHeight="35px" fontFamily="bold"> Talk to a qualified doctor online for FREE & get expert guidance  </Text>
                        <Button backgroundColor="#ff6f61" color="#fff" textAlign="center" cursor="pointer" paddingLeft="130px" paddingRight="130px" h="50px" marginTop="30px"><span style={{fontWeight:"bold"}}>CALL NOW</span></Button>
                        </Box>
                        <Spacer />
                        <Box >
                               <Image src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/talk-now.png" h="67%" w="430px" marginTop="20px"></Image>
                        </Box>
                        </Flex>
                 </div>
                 {/* select */}
                 <Select1 />
                 {/* videos */}
                 <VideoData />
                 {/* Footer */}
                 <Footer />
    </div>
  )
}
export default Covid19;