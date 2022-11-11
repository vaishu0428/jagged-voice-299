import {Box,Flex, Heading, Spacer,Text} from "@chakra-ui/react"
import React from "react"
const Data=[
    {
        state:"Andaman & Nicobar Islands",
        Hno:"03192-232102",
    },
    {
        state:"Andhra Pradesh",
        Hno:"0866-2410978",
    },
    {
        state:"Arunachal Pradesh",
        Hno:"9436-055743",
    },
    {
        state:"Assam",
        Hno:"6913-347770",
    },
    {
        state:"Bihar",
        Hno:"104",
    },
    {
        state:"Chandigarh",
        Hno:"9779-558282",
    },
    {
        state:"Chhattisgarh",
        Hno:"104",
    },
    {
        state:"Dadra & Nagar Haveli",
        Hno:"104",
    },
    {
        state:"Daman & Diu",
        Hno:"104",
    },
    {
        state:"Delhi",
        Hno:"011-22307145",
    },
    {
        state:"Goa",
        Hno:"104",
    },
    {
        state:"Delhi",
        Hno:"011-22307145",
    },
    {
        state:"Gujarat",
        Hno:"104",
    },
    {
        state:"Haryana",
        Hno:"8558-893911",
    },
    {
        state:"Himachal Pradesh",
        Hno:"104",
    },
    {
        state:"Jammu",
        Hno:"0191-2520982",
    },
    {
        state:"Jharkhand",
        Hno:"104",
    },

    {
        state:"Karnataka",
        Hno:"104",
    },
    {
        state:"Kashmir",
        Hno:"0194-2440283",
    },
    {
        state:"Kerala",
        Hno:"0471-2552056",
    },
    {
        state:"Ladakh",
        Hno:"0198-2256462",
    },
    {
        state:"Lakshadweep",
        Hno:"104",
    },
    {
        state:"Madhya Pradesh",
        Hno:"104",
    },
    {
        state:"Maharashtra",
        Hno:"020-26127394",
    },
    {
        state:"Manipur",
        Hno:"3852-411668",
    },
    {
        state:"Meghalaya",
        Hno:"108",
    },
    {
        state:"Mizoram",
        Hno:"102",
    },
    {
        state:"Nagaland",
        Hno:"7005-539653",
    },
    {
        state:"Odisha",
        Hno:"9439-994859",
    },
]
const Pagination = () =>
{
    
   
   return(
     <div style={{width:"85%",height:"600px",backgroundColor:"#FDF0DF",margin:"auto",marginTop:"50px",padding:"30px"}}>
           <Box>
             <h2 style={{color:"#3b3b3b",fontWeight:"bold",textAlign:"left",fontSize:"2.5vw",fontFamily:"Poppins"}}>State Helpline Numbers for coronavirus in India</h2>

           </Box>
           <Box>
            <Flex>
                <Box>
                  <Heading>State/UT</Heading>
                  {
                   Data.map((e)=>(
                      <Text>{e.state}</Text>
                   ))}
                </Box>
                <Spacer />
                <Box>
                 <Heading>State HelpLine No.</Heading>
                 {
                   Data.map((e)=>(
                      <Text>{e.Hno}</Text>
                   ))}
                </Box>
            </Flex>
             
                
             </Box>
     </div>
   )
}
export default Pagination;