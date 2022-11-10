import Navbar from "../Navbar/Navbar";
import { Flex, Spacer,Box,Image,Heading ,Text, Link} from '@chakra-ui/react'
const brands=[
      {
        img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/65ec4ca9-d51d-4d47-8f41-d41d8360cb9f.png",
        text:"Zandu",
      },
      {
        img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c3b1d282-9ef5-4dee-aebb-dc44ed088fa3.png",
        text:"Protinex",
      },
      {
        img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5aeee246-f300-4dc6-ac74-142343a28397.png",
        text:"Accu-Chek",
      },
      {
        img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b1c6229c-ba4b-41d2-b2ab-88a7ca5ea056.png",
        text:"Manforce",
      },
      {
        img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f3461d00-3633-48d3-914e-6b60983c23e6.png",
        text:"Dabur",
      },
      {
        img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/79e3b822-d96b-4ac7-9df4-a87cb59beb80.png",
        text:"Contour",
      },
      {
        img:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/26a87493-55f3-4944-848a-f4540da0644a.png",
        text:"Hansaplast",
      },
]
const popularCategories =[
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/1a60e859-3e9f-4f13-84ec-57b7c03a73ce.png",
        text:"Vitamins & Supplements"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c7b76d60-380b-4ac6-a8f2-1c6c99f828c3.png",
        text:"Nutritional Drinks"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/bb094c46-5ca2-4a1c-84ae-0cb5c1d2723b.png",
        text:"Healthcare Devices"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/sjjktxvuqn3hgdf1zthz.png",
        text:"Homeopathy"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/54fda5eb-32d5-4b99-80ba-d1e8b5103be2.png",
        text:"Sexual Wellness"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/he8w8sxhmm2la752zjt2.png",
        text:"Skin Care"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d0e47f42-a6f7-40ad-b1d3-145b3744b961.png",
        text:"Diabetes Care"
    },
]
const Sugarsub=[
    {
       src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/bpgstknem0udqzp9p4dm.jpg",
       text:"Sugar Free Gold Low Calorie Sweetener",
       para:"bottle of 500 pellets",
       price:"$251"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/fud0ky8qdz1mupsc58ze.jpg",
        text:"So Sweet Stevia Sugar Free Tablet",
        para:"packets of 100 tablets",
        price:"$117"
     },
     {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/d8wetugtajdasve7gg0u.jpg",
        text:"Sugar Free Natura Low Calorie Sweetener...",
        para:"bottle of 500 pellets",
        price:"$264"
     },
     {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/kuhv7g7ouhb8jwhvsgmk.jpg",
        text:"So Sweet Xylitol Powder Natural Sweetenre",
        para:"packets of 250 gn pouch",
        price:"$324"
     },
     {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/tqblkrwqqefunrkiut4r.jpg",
        text:"Zindagi Stevia Tablet",
        para:"bottle of 100 tablets",
        price:"$149"
     },
     {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/jadahxgbfiupbmy8sxve.jpg",
        text:"Lankanto Monkfruit Sweetener with ...",
        para:"packets of 200 gm Granules",
        price:"$288"
     },
     {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/lybhdtfz2jccygh5lgpw.jpg",
        text:"Alma Combo pack Of Sugarfree 200 Tablets",
        para:"combo pack of 2 bottles",
        price:"$849"
     },
]
const Shampoo=[
    {
       img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/qnjteicqbjz5fm8ugwce.png",
       text:"SBL Herbal",
       price:"$129"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/zjpxo80ruih8etrotlka.jpg",
        text:"Axiome Mukti",
        price:"$149"
     },
     {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/leptfjo4jfvz2wlpl9cu.png",
        text:"Boricke & Tafel",
        price:"$186"
     },
     {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/t0o1fyexmrpetrsqnnwx.png",
        text:"Sri Sri Tattva Protien",
        price:"$133"
     },
     {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/vf6bf5sj6xgzlert8hts.png",
        text:"Boericke Dandruff",
        price:"$106"
     },
     {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/i5kbl7bek1cueqvvcfqu.jpg",
        text:"Mamaearth Onion",
        price:"$314"
     },
     {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ucwt9toh9spnrvufa8nw.jpg",
        text:"Jiva Amala ",
        price:"$164"
     },
]
const Protine=[
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/wkmxonjuot7skrmdoxxx.jpg",
        text:"Protinex Health",
        price:"$548"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/xt6iyyss6fgymdk3kymp.jpg",
        text:"Protinex Health",
        price:"$548"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/y1mpjdkdn63w70dp98fq.jpg",
        text:"Protinex Health",
        price:"$998"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qmmug1yktuszhmanxsyt.jpg",
        text:"Protinex Health",
        price:"$1043"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/myadq5zcwsrzepyibkc5.jpg",
        text:"Protinex Health",
        price:"$627"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/xg9w5mk9wvijr6hky8fx.jpg",
        text:"Protinex Health",
        price:"$549"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/jatnhwocm8v2ub0zaglm.jpg",
        text:"Protinex Health",
        price:"$460"
    },
]
const Plant=[
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/2e3ea5c59cbc4ea7a7235c467fc20dd0.jpg",
        text:"Tata Go Fit Plant",
        price:"$2479"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/yiqgfgw1yyu2kemwauvv.jpg",
        text:"Himalayan Organics",
        price:"$779"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/77a6f25d6ff74a9092010a342636c132.jpg",
        text:"Tata Go Fit Plant Protine",
        price:"$1279"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/bhbkcdrdpdyuyivcxwpb.jpg",
        text:"WellBeing Nutrition",
        price:"$379"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cbe3d4af100e4de7b26101dd0facddda.jpg",
        text:"Carbamide Forte Plant",
        price:"$449"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/jphhbkdi5ecqwhxb5j77.jpg",
        text:"Fast&UP Ghana Chocolate",
        price:"$999"
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/bm8uafqpysex1sscxxbd.jpg",
        text:"Terravita Daily D3 + B12",
        price:"$449"
    },
   
]
const Winter=[
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/1aeb916b-c8e7-4327-9c3a-06de29039b9e.jpg",
        text:"Body & SkinCare"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e782fef1-a40c-4efa-8aa9-c1d2a96f5067.jpg",
        text:"Nebulizers",
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/7b6f057b-ca9f-4d19-84a7-775c5b6588f3.jpg",
        text:"Immunity Boosters",
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/69b09ae2-58c6-4e8f-a432-94323f13e183.jpg",
        text:"Winter Combos",
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b480b26e-bc65-4ee9-9ed5-1b09f6dff241.jpg",
        text:"Hair & ScalpCare",
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c8e91102-66a0-481b-8ae7-b315682a4825.webp",
        text:"Thermometers",
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/da266827-bdb2-47b1-89b6-1d30031ee5e7.jpg",
        text:"Green Tea & Herbal Tea",
    },
]
const Homo=[
    {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/2b18a9de0355455681ec4bb004f1b21b.jpg",
        text:"Tata 1 mg Ply Surgical Mask"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c1673235f0b5468b907dde2fe4cfbe1a.jpg",
        text:"Tata 1 mg BIS FFP2 Mask"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/y4vc0wv2iackgrkrldgr.jpg",
        text:"Care View 3 plyPremium Mask"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/rtkmdyuyy7jgzkwsffmv.png",
        text:"Safeshield 3 Layer Mask"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/drxxrlxnq2kymbjaon49.jpg",
        text:"Care View Universal Mask"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/6bf2d47a14fe42619139f2933fb0b47d.jpg",
        text:"Tata 1mg BIS FFp2"
    },
    {
        src:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/078eadc81a60489bb211ca51ed75c921.jpg",
        text:"Tata 1mg BIS FFp2 N95"
    },
]
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
                   <div style={{heigth:"300px",backgroundColor:"#fff",boxShadow:"0 0 7px 0 rgba(0,0,0,.14)"}}>
                    <div style={{width:"80%",margin:'auto',textAlign:"center",fontSize:"14px",fontFamily:"Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif", lineHeight:"1.42857143",color:"#212121"}}>
                         <Flex>
                            <Box marginTop="20px" color="#212121" marginBottom="30px" >
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png"></Image>
                                <Text marginTop="10px">Diabetes Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px" marginBottom="30px">
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png"></Image>
                                <Text marginTop="10px">Cardiac Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px" marginBottom="30px">
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/18e90e64-9e8c-47c5-ae33-508903429450.png"></Image>
                                <Text marginTop="10px">Stomach Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px" marginBottom="30px">
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/14f0bebe-6220-4ac7-b4bb-c5b425975af3.png"></Image>
                                <Text marginTop="10px">Liver Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px" marginBottom="30px">
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png"></Image>
                                <Text marginTop="10px">Bone,Joint Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px" marginBottom="30px"> 
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/555f6a24-3e20-41ee-a03b-e3dbda183392.png"></Image>
                                <Text marginTop="10px">Kidney Care</Text>
                            </Box>
                            <Spacer />
                            <Box marginTop="20px" marginBottom="30px">
                                <Image src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5fa692ad-6647-4db5-9cb4-eb0bd9111331.png"></Image>
                                <Text marginTop="10px">Pain Relief</Text>
                            </Box>
                            </Flex> 
                            </div>  
                   </div>
                   {/* featured brands */}
                   <div>
                         <div style={{width:"80%",margin:"auto",height:"60px"}}>
                          <flex >
                            <Box>
                          <Text textAlign="left" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">Featured brands</Text>
                          </Box>
                          {/* <Box>
                          <Link textAlign="right" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">SEE ALL</Link>
                          </Box> */}
                          </flex>

                          </div>
                           

                          <div style={{heigth:"200px",backgroundColor:"#fff",boxShadow:"0 0 7px 0 rgba(0,0,0,.14)"}}>
                         <div style={{width:"80%",margin:'auto',textAlign:"center",fontSize:"14px",fontFamily:"Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif", lineHeight:"1.42857143",color:"#212121"}}>
                         <Flex>
                            {
                            brands.map((e)=>
                            (
                                <>
                                    <Box marginTop="20px" color="#212121" marginBottom="30px" >
                                    <Image src={e.img}></Image>
                                    <Text marginTop="10px">{e.text}</Text>
                                </Box>
                                <Spacer />
                                </>
                            ))}
                           
                            </Flex> 
                            </div>  
                   </div>
                  </div>



                   <div>
                         <div style={{width:"80%",margin:"auto",height:"60px"}}>
                          <flex >
                            <Box>
                          <Text textAlign="left" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">Popular categories</Text>
                          </Box>
                          {/* <Box>
                          <Link textAlign="right" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">SEE ALL</Link>
                          </Box> */}
                          </flex>

                          </div>
                          {/*  */}
                          <div style={{heigth:"200px",backgroundColor:"#fff",boxShadow:"0 0 7px 0 rgba(0,0,0,.14)"}}>
                         <div style={{width:"80%",margin:'auto',textAlign:"center",fontSize:"14px",fontFamily:"Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif", lineHeight:"1.42857143",color:"#212121"}}>
                         <Flex>
                            {
                             popularCategories.map((e)=>
                            (
                                <>
                                    <Box marginTop="20px" color="#212121" marginBottom="30px" >
                                    <Image src={e.src}></Image>
                                    <Text marginTop="10px">{e.text}</Text>
                                </Box>
                                <Spacer />
                                </>
                            ))}
                           
                            </Flex> 
                            </div>  
                   </div>
                           </div>
                   
{/*  */}
<div>
                         <div style={{width:"80%",margin:"auto",height:"60px"}}>
                          <flex >
                            <Box>
                          <Text textAlign="left" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">Sugar substitutes</Text>
                          </Box>
                          {/* <Box>
                          <Link textAlign="right" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">SEE ALL</Link>
                          </Box> */}
                          </flex>

                          </div>
                          {/*  */}
                          <div style={{backgroundColor:"#fff",boxShadow:"0 0 7px 0 rgba(0,0,0,.14)"}}>
                         <div style={{width:"80%",margin:'auto',textAlign:"center",fontSize:"14px",fontFamily:"Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif", lineHeight:"1.42857143",color:"#212121"}}>
                         <Flex>
                            {
                             Sugarsub.map((e)=>
                            (
                                <>
                                    <Box marginTop="20px" color="#212121" marginBottom="30px" textAlign="left">
                                    <Image src={e.src} w="140px" h="140px"></Image>
                                    <Text marginTop="10px" fontWeight="bold" w="160px" marginBottom="10px">{e.text}</Text>
                                    <Text marginBottom="5px" color="gray">{e.para}</Text>
                                    <Text fontWeight="bold">{e.price}</Text>
                                </Box>
                                <Spacer />
                                </>
                            ))}
                           
                            </Flex> 
                            </div>  
                   </div>
                           </div>           



{/* Shampoo */}
<div>
                         <div style={{width:"80%",margin:"auto",height:"60px"}}>
                          <flex >
                            <Box>
                          <Text textAlign="left" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">Shampoos</Text>
                          </Box>
                          {/* <Box>
                          <Link textAlign="right" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">SEE ALL</Link>
                          </Box> */}
                          </flex>

                          </div>
                          {/*  */}
                          <div style={{backgroundColor:"#fff",boxShadow:"0 0 7px 0 rgba(0,0,0,.14)"}}>
                         <div style={{width:"80%",margin:'auto',textAlign:"center",fontSize:"14px",fontFamily:"Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif", lineHeight:"1.42857143",color:"#212121"}}>
                         <Flex>
                            {
                             Shampoo.map((e)=>
                            (
                                <>
                                    <Box marginTop="20px" color="#212121" marginBottom="30px" textAlign="center">
                                    <Image src={e.img} w="140px" h="140px"></Image>
                                    <Text marginTop="10px" fontWeight="bold" w="160px" marginBottom="10px">{e.text}</Text>
                                    
                                    <Text fontWeight="bold">{e.price}</Text>
                                </Box>
                                <Spacer />
                                </>
                            ))}
                           
                            </Flex> 
                            </div>  
                   </div>
                           </div>  
{/* protine */}

<div>
                         <div style={{width:"80%",margin:"auto",height:"60px"}}>
                          <flex >
                            <Box>
                          <Text textAlign="left" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">Top deals on Protinex</Text>
                          </Box>
                          {/* <Box>
                          <Link textAlign="right" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">SEE ALL</Link>
                          </Box> */}
                          </flex>

                          </div>
                          {/*  */}
                          <div style={{backgroundColor:"#fff",boxShadow:"0 0 7px 0 rgba(0,0,0,.14)"}}>
                         <div style={{width:"80%",margin:'auto',textAlign:"center",fontSize:"14px",fontFamily:"Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif", lineHeight:"1.42857143",color:"#212121"}}>
                         <Flex>
                            {
                             Protine.map((e)=>
                            (
                                <>
                                    <Box marginTop="20px" color="#212121" marginBottom="30px" textAlign="center">
                                    <Image src={e.img} w="140px" h="140px"></Image>
                                    <Text marginTop="10px" fontWeight="bold" w="160px" marginBottom="10px">{e.text}</Text>
                                    
                                    <Text fontWeight="bold">{e.price}</Text>
                                </Box>
                                <Spacer />
                                </>
                            ))}
                           
                            </Flex> 
                            </div>  
                   </div>
                           </div>  



{/* plant */}
<div>
                         <div style={{width:"80%",margin:"auto",height:"60px"}}>
                          <flex >
                            <Box>
                          <Text textAlign="left" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">Plant based supplements</Text>
                          </Box>
                          {/* <Box>
                          <Link textAlign="right" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">SEE ALL</Link>
                          </Box> */}
                          </flex>

                          </div>
                          {/*  */}
                          <div style={{backgroundColor:"#fff",boxShadow:"0 0 7px 0 rgba(0,0,0,.14)"}}>
                         <div style={{width:"80%",margin:'auto',textAlign:"center",fontSize:"14px",fontFamily:"Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif", lineHeight:"1.42857143",color:"#212121"}}>
                         <Flex>
                            {
                             Plant.map((e)=>
                            (
                                <>
                                    <Box marginTop="20px" color="#212121" marginBottom="30px" textAlign="center">
                                    <Image src={e.img} w="140px" h="140px"></Image>
                                    <Text marginTop="10px" fontWeight="bold" w="160px" marginBottom="10px">{e.text}</Text>
                                    
                                    <Text fontWeight="bold">{e.price}</Text>
                                </Box>
                                <Spacer />
                                </>
                            ))}
                           
                            </Flex> 
                            </div>  
                   </div>
                           </div>  
{/*  */}
<div>
                         <div style={{width:"80%",margin:"auto",height:"60px"}}>
                          <flex >
                            <Box>
                          <Text textAlign="left" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">Winter care</Text>
                          </Box>
                          {/* <Box>
                          <Link textAlign="right" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">SEE ALL</Link>
                          </Box> */}
                          </flex>

                          </div>
                          {/*  */}
                          <div style={{heigth:"200px",backgroundColor:"#fff",boxShadow:"0 0 7px 0 rgba(0,0,0,.14)"}}>
                         <div style={{width:"80%",margin:'auto',textAlign:"center",fontSize:"14px",fontFamily:"Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif", lineHeight:"1.42857143",color:"#212121"}}>
                         <Flex>
                            {
                             Winter.map((e)=>
                            (
                                <>
                                    <Box marginTop="20px" color="#212121" marginBottom="30px" >
                                    <Image src={e.src}></Image>
                                    <Text marginTop="10px">{e.text}</Text>
                                </Box>
                                <Spacer />
                                </>
                            ))}
                           
                            </Flex> 
                            </div>  
                   </div>
                           </div>
{/*  */}
<div>
                         <div style={{width:"80%",margin:"auto",height:"60px"}}>
                          <flex >
                            <Box>
                          <Text textAlign="left" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">Masks</Text>
                          </Box>
                          {/* <Box>
                          <Link textAlign="right" paddingTop="30px" color="#212121" fontSize="18px" lineHeight="1.42857143" fontFamily="Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif">SEE ALL</Link>
                          </Box> */}
                          </flex>

                          </div>
                          {/*  */}
                          <div style={{heigth:"200px",backgroundColor:"#fff",boxShadow:"0 0 7px 0 rgba(0,0,0,.14)"}}>
                         <div style={{width:"80%",margin:'auto',textAlign:"center",fontSize:"14px",fontFamily:"Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif", lineHeight:"1.42857143",color:"#212121"}}>
                         <Flex>
                            {
                            Homo.map((e)=>
                            (
                                <>
                                    <Box marginTop="20px" color="#212121" marginBottom="30px" >
                                    <Image src={e.src} h="130px" w="130px" marginBottom="30px"></Image>
                                    <Text marginTop="10px" w="150px" fontWeight="bold">{e.text}</Text>
                                </Box>
                                <Spacer />
                                </>
                            ))}
                           
                            </Flex> 
                            </div>  
                   </div>
                           </div>






            </div>
    </div>
 )
}
export default Medicine;