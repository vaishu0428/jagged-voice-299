import Navbar from "../Navbar/Navbar";
import { Flex, Spacer,Box,Image,Heading ,Text} from '@chakra-ui/react'
const Medicine = () =>
{
 return(
    <div>
        <Navbar />
        <Navbar />
        <Navbar />
        {/* Advertisement */}
           <div>
               <Box>
             
               <Flex>
                <Box  >
                    <Image src="https://onemg.gumlet.io/c2b43e43-58c0-4ffc-b977-76315a032908_1667988192.jpg?w=1067&h=250&format=auto" w='100%' h='250px'></Image>
                </Box>
              
                <Box >
                    <Image src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/b0ea3f7a-43c0-458f-8362-288ce3715009.png" h="250px" />
                </Box>
                
                </Flex>
                </Box>
            </div>
            {/* Text */}
            <div style={{textalign:"center",backgroundColor:"#fff",border: "2px solid #e0e0e0"}} >
                <Heading as='h3' size='md' color="#666" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif" lineHeight="1.42857143" fontSize="20px" marginTop="30px" marginBottom="30px">Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</Heading>
            </div>
            {/* Advertisement */}
            <div style={{backgroundColor:"#EDF2F7", height:"210px", borderBottom:"2px solid #e0e0e0",padding:"30px"}}>
                <Box w="85%"  m="auto">
                    
                    <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" marginBottom="30px"></Image>
                    <Text textAlign="left" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">Shop by health concerns</Text>
                    
                </Box>
            </div>

            {/* card */}
            <div style={{ backgroundColor:"#EDF2F7",height:"auto"}}>
                   {/* health concerns */}
                   <div style={{heigth:"200px",backgroundColor:"#fff",boxShadow:"0 0 7px 0 rgba(0,0,0,.14)"}}>
                    <div style={{width:"80%",margin:'auto',textAlign:"center",fontSize:"14px",fontFamily:"Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif", lineHeight:"1.42857143",color:"#212121"}}>
                         <Flex>
                            <Box marginTop="20px" color="#212121" >
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png"></Image>
                                <Text>Diabetes Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px">
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png"></Image>
                                <Text>Cardiac Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px">
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/18e90e64-9e8c-47c5-ae33-508903429450.png"></Image>
                                <Text>Stomach Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px">
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/14f0bebe-6220-4ac7-b4bb-c5b425975af3.png"></Image>
                                <Text>Liver Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px">
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png"></Image>
                                <Text>Bone,Joint Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px">
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/555f6a24-3e20-41ee-a03b-e3dbda183392.png"></Image>
                                <Text>Kidney Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px">
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5fa692ad-6647-4db5-9cb4-eb0bd9111331.png"></Image>
                                <Text>Pain Relief</Text>
                            </Box>
                            </Flex> 
                            </div>  
                   </div>
            </div>
    </div>
 )
}
export default Medicine;