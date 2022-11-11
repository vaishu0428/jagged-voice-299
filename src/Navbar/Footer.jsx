import {Box,Flex, Spacer,Text,Image} from "@chakra-ui/react"
const Footer = () =>
{ 
    return(
        <div style={{width:"100%",height:"550px",backgroundColor:"#fffcf8",fontFamily:"Clear Sans",marginTop:"50px"}}>
              <Box w="60%"  m="auto" >
                        <Box paddingTop="30px">
                            <Flex>
                                <Text fontSize="20px">Business Partnerships</Text>
                                <Spacer />
                                <Text fontSize="20px">About us</Text>
                                <Spacer />
                                <Text fontSize="20px">Contact us</Text>
                                <Spacer />
                                <Text fontSize="20px">Terms</Text>
                                <Spacer />
                                <Text fontSize="20px">Privacy Policy</Text>
                                <Spacer />
                                <Text fontSize="20px">Jobs</Text>
                            </Flex>
                        </Box>
                        {/*  */}
                        <Box marginTop="30px">
                            <Flex>
                                <Box w="23%" h="150px" m="auto" textAlign="center" padding="auto">
                                    <Image src="https://static.legitscript.com/seals/729605.png" h="130px" w="130px" marginBotton="20px"></Image>
                                    <Text color="#767676" marginTop="20px">LegitScript is a verification and monitoring service for online pharmacies</Text>
                                </Box>
                                <Spacer />
                                <Box w="23%"  h="150px" m="auto" textAlign="center">
                                    <Image src="https://img.1mg.com/images/footer/trust-stamp-2-20mil.svg" h="130px" w="130px" marginBotton="20px"></Image>
                                    <Text color="#767676" marginTop="20px">Trusted by more than 20 million people</Text>
                                </Box>
                                <Spacer />
                                <Box w="23%" h="150px" m="auto" textAlign="center">
                                    <Image src="https://onemg.gumlet.io/ii0pnk2hugxxv9lu3v5e.svg" h="130px" w="130px" marginBotton="20px"></Image>
                                    <Text color="#767676" marginTop="20px">All content is authored by Tata 1mg Editorial Team</Text>
                                </Box>
                                <Spacer />
                                <Box w="23%" h="150px" m="auto" textAlign="center">
                                    <Image src="https://onemg.gumlet.io/URS_ebgmxc.png" h="130px" w="130px" marginBotton="20px"></Image>
                                    <Text color="#767676" marginTop="20px">We are certified
"ISO/IEC 27001:2013"</Text>
                                </Box>
                               
                            </Flex>
                        </Box>
                    {/*  */}
                    <Box w="25%"  h= "180px" m="auto" marginTop="90px"  >
                        <Flex>
                            <Box>
                                <Image src="https://onemg.gumlet.io/facebook-rebrand_ocvkak_1_cijmmc.svg"  h="60px" w="60px"/>
                            </Box>
                            <Spacer />
                            <Box>
                                <Image src="https://onemg.gumlet.io/twitter-rebrand_qiai2s_jpn2h3.svg" h="60px" w="60px"></Image>
                            </Box>
                            <Spacer />
                            <Box>
                                <Image src="https://onemg.gumlet.io/linkedin-rebrand_tbeedv_zaflot.svg" h="60px" w="60px"/>
                            </Box>
                        </Flex>
                        <Text color="#767676" fontSize="15px" marginTop="20px" marginBottom="20px">©2022 Tata 1mg. All rights reserved.</Text>
                        <Box w="70%" m="auto" ><Image src="https://www.1mg.com/images/tata_1mg_custom_footer.svg" /></Box>
                       
                    </Box>












              </Box>
        </div>
    )

}
export default Footer;