import { Select,Box,Flex, Spacer,Image, Button, Heading } from "@chakra-ui/react";
import React from "react";
const defaultData=[
    {
        img:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Home_isolation_tips_by_Tata_1mg.png",
    },
    {
        img:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/COVID-Omicron-Tata1mg.png",
    },
    {
        img:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/Double-masking-tips-by-1mg.png",
    }
]
const HindiData=[
    {
        img:"https://res.cloudinary.com/du8msdgbj/image/upload/v1586254044/marketing/ampzv5cxloxj88xdakeo.jpg",
    },
    {
        img:"https://res.cloudinary.com/du8msdgbj/image/upload/v1586411713/marketing/nwsfuarm2fdwcppos5ns.jpg",
    },
    {
        img:"https://res.cloudinary.com/du8msdgbj/image/upload/v1586411740/marketing/u5my7vlivchlneubzvmk.jpg",
    },
    {
        img:"https://res.cloudinary.com/du8msdgbj/image/upload/v1586250984/marketing/whzp9jmz86edz4kebcex.jpg",
    }
]

const Select1 = () =>
{
    const [state,setState]=React.useState([defaultData])
    return(
        <div style={{width:"100%",height:"auto",padding:"20px" ,backgroundColor:"#FEF7EF" ,marginTop:"50px"}}>
                <div style={{width:"85%",height:"90%",margin:"auto" ,textAlign:"left"}}>
                     <h2 style={{fontSize:"2.6vw",fontWeight:"700",lineHeight:"1.4",paddingTop:"8px",color:"#3b3b3b",fontFamily:"Poppins"}}>Prepare, don't panic </h2>
                    <div style={{fontSize:"1.45vw",paddingTop:"8px",lineHeight:"1.4",color:"#767676",fontFamily:"Poppins",fontWeight:"400px"}}>Counter misinformation and keep yourself updated about all COVID-related developments with concise booklets and guides. These guides, compiled by the team of doctors at Tata 1mg, are based on analysis of data by trusted sources such as the WHO, Lancet, National Institute of Communicable Diseases, South Africa, MoHFW & discussions with medical experts. </div>
                    <Box marginTop="30px"  w="400px">
                        <Select placeholder="SELECT LANGUAGE" value="selectLang" backgroundColor="#FF6F61" h="50px" color="#fff" textAlign="center" fontWeight="bold" fontSize="1.23vw" fontFamily="Poppins" onChange={(e) =>{
                            const languageData= e.target.value;
                            if(languageData==="option1")
                            {
                            setState(defaultData)
                            
                            }
                            else if(languageData==="option2")
                            {
                                setState(HindiData)
                               
                            }
                        }}>
                        
                        <option value='option1'>English</option>
                        <option value='option2' color="#212529">Hindi</option>
                        </Select>
                    </Box>
                 
                 {/*  */}
                 <Box marginTop="40px">
                    <Flex>
                        {
                            state.map((e)=>
                            (

                                <Box  >
                                <Image src={e.img}></Image>
                                <Spacer />
                            </Box>
                            ))}
                        
                         
                    </Flex>
                 </Box>
                </div>
        </div>
    )
}
export default Select1;