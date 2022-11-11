import { Heading,Flex, Spacer,Box ,AspectRatio} from "@chakra-ui/react";
const VideoData = () =>
{
 return (
    <div style={{width:"85%",height:"970px",margin:"auto",backgroundColor:"#FDF0DF",marginTop:"50px",padding:"30px",textAlign:"left",fontFamily:"Poppins"}}>
        <Heading color="#212529" w="90%" >Watch these detailed videos to get answers to commonly asked questions on coronavirus in India:</Heading>
        <div style={{marginTop:"40px"}}>
           <Flex>
                 <Box>
                 
            <iframe width="610"
             height="370" 
             src="https://www.youtube.com/embed/P4TKxfj3tu4" 
             title="YouTube video player" frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowfullscreen></iframe>

                 </Box>
                 <Spacer />
                 <Box>
                 <iframe width="610" 
                 height="370" 
                 src="https://www.youtube.com/embed/UN7fbohf0uw" 
                 title="YouTube video player" 
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>
                 </Box>
           </Flex>
        </div>
        <div style={{marginTop:"30px"}}>
           <Flex>
                 <Box>
                 
                 <iframe width="610" 
                 height="370" src="https://www.youtube.com/embed/H3H0XCyQgXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                 </Box>
                 <Spacer />
                 <Box>
                 <iframe width="610" height="370" src="https://www.youtube.com/embed/pso2qbEj0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 </Box>
           </Flex>
        </div>

    </div>
 )
}
export default VideoData;