import {Box,Flex, Heading, Spacer,Text} from "@chakra-ui/react"
import React from "react"
import Page from "./Page"
 const getData = async (page) =>
 {
    return fetch(`http://localhost:3000/task?_page=${page}&_limit=6`).then((res) => res.json())
 }
const Pagination = () =>
{
    const [state1,setState1]=React.useState([])
    const [page,setPage]=React.useState(1)
    const [totalPages,setTotalPages]=React.useState(null)
    React.useEffect(()=>{
        append(1)
    },[page]);
    async function append(page){
        let {data,totalPages}=await getData(page)
        
        setState1(data)
        setTotalPages(totalPages)
    }
    function handleClick(val){
        setPage(val);
        getData(val)
    }
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
                   state1.map((e)=>(
                      <Text key={e}>{e.state}</Text>
                   ))}
                </Box>
                <Spacer />
                <Box>
                 <Heading>State HelpLine No.</Heading>
                 {
                   state1.map((e)=>(
                      <Text key={e}>{e.Hno}</Text>
                   ))}
                </Box>
            </Flex>
             
                
             </Box>
            <Page  total={totalPages} curr={page} handleClick={handleClick}/>
     </div>
   )
}
export default Pagination;