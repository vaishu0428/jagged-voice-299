import Navbar from "../Navbar/Navbar"
import Footer from "../Navbar/Footer"
import React from "react"

import {Flex,Box, Heading,Text,Image,Spacer,Grid,GridItem, Button} from "@chakra-ui/react"
import AddToCart from "../Components/AddtoCart"
const Deals=[
    {
        img:"https://onemg.gumlet.io/a_ignore,c_fit,q_auto,w_150,f_auto,h_150/set9ncr9afsj7sgw5vph.png",
        text:"New Arrivals",
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,c_fit,q_auto,w_150,f_auto,h_150/kkv2wpveslawly1g45lk.png",
        text:"Deals of the Day",
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,c_fit,q_auto,w_150,f_auto,h_150/leg31pcxlto8er8ihvra.png",
        text:"Tranding Now",
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,c_fit,q_auto,w_150,f_auto,h_150/qfvofh8ekbjapmfgvzeu.png",
        text:"Minimum 33%... off",
    },
    {
        img:"https://onemg.gumlet.io/a_ignore,c_fit,q_auto,w_150,f_auto,h_150/efpd4v3nrcjubivd5wmf.png",
        text:"Popular Combi Link",
    },
]
const categ =[
  {
      "id": 109,
      "name": "Covid Essentials",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png",
      "discountText": "Upto 77% off",
      "slug": "covid-essentials-109",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=109&category_name=Covid Essentials"
    },
    {
      "id": 877,
      "name": "Personal Care",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1e622b0308ec3ab48887512eaa3488a5.png?f=png",
      "discountText": "Upto 80% off",
      "slug": "personal-care-877",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=877&category_name=Personal Care"
    },
    {
      "id": 648,
      "name": "Health Food and Drinks",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/335dae76832d370c94f0440f5ba89e1f.png?f=png",
      "discountText": "Upto 57% off",
      "slug": "health-food-and-drinks-648",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=648&category_name=Health Food and Drinks"
    },
    {
      "id": 8881,
      "name": "Beauty",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/403b8ada7b113c7cb2e8d09e3420edfa.png?f=png",
      "discountText": "Upto 35% off",
      "slug": "beauty-8881",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=8881&category_name=Beauty"
    },
    {
      "id": 93,
      "name": "Skin Care",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/154dec0567b23244b7dcbf2158d39eee.png?f=png",
      "discountText": "Upto 50% off",
      "slug": "skin-care-93",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=93&category_name=Skin Care"
    },
    {
      "id": 734,
      "name": "Home Care",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png",
      "discountText": "Upto 35% off",
      "slug": "home-care-734",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=734&category_name=Home Care"
    },
    {
      "id": 765,
      "name": "Ayurvedic Care",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png",
      "discountText": "Upto 70% off",
      "slug": "ayurvedic-care-765",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=765&category_name=Ayurvedic Care"
    },
    {
      "id": 575,
      "name": "Sexual Wellness",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/d1b29f7a2b5f3d62a3d47b617aceef1b.png?f=png",
      "discountText": "Upto 53% off",
      "slug": "sexual-wellness-575",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=575&category_name=Sexual Wellness"
    },
    {
      "id": 623,
      "name": "Fitness Supplements",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/514d0d7d01a63502b4ebfec9ae26f4d2.png?f=png",
      "discountText": "Upto 80% off",
      "slug": "fitness-supplements-623",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=623&category_name=Fitness Supplements"
    },
    {
      "id": 838,
      "name": "Mother and Baby Care",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f692f7243b8036ed97d99a7973dd42b3.png?f=png",
      "discountText": "Upto 50% off",
      "slug": "mother-and-baby-care-838",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=838&category_name=Mother and Baby Care"
    },
    {
      "id": 717,
      "name": "Healthcare Devices",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/cfc8ee511609321e91eb86a34f5b2885.png?f=png",
      "discountText": "Upto 65% off",
      "slug": "healthcare-devices-717",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=717&category_name=Healthcare Devices"
    },
    {
      "id": 693,
      "name": "Health Condition",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/8a31db906db93f7cba59f1c48d3ba239.png?f=png",
      "discountText": "Upto 65% off",
      "slug": "health-condition-693",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=693&category_name=Health Condition"
    },
    {
      "id": 145,
      "name": "Diabetic Care",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png?f=png",
      "discountText": "Upto 65% off",
      "slug": "diabetic-care-145",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=145&category_name=Diabetic Care"
    },
    {
      "id": 750,
      "name": "Elderly Care",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fa936f30b4563fc4abd187fb22fe5258.png?f=png",
      "discountText": "Upto 45% off",
      "slug": "elderly-care-750",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=750&category_name=Elderly Care"
    },
    {
      "id": 788,
      "name": "Accessories And Wearables",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/763b558b32313005bc11d0cae0e26f58.png?f=png",
      "discountText": "Upto 35% off",
      "slug": "accessories-and-wearables",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=788&category_name=Accessories And Wearables"
    },
    {
      "id": 9297,
      "name": "Top Products",
      "imageUrl": "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png",
      "discountText": "Upto % off",
      "slug": "top-products-9297",
      "deeplink": "push.pharmeasy.clevertap://deeplink/healthcare_product_list?category_id=9297&category_name=Top Products"
    }
]

const AllData = () =>
{
    
      const [cart, setCart] = React.useState([]);
      const addToCart = (e) => {
        setCart([...cart, e]);
        alert(" CONGRATS Your item is Succesfully added")
      };
      console.log(cart)
      
  return(
    <div>
        <Navbar />
        <Navbar />
        <div style={{backgroundColor:"#f6f6f6",width:"100%",height:"auto",padding:"20px"}}>
             <div style={{width:"80%",margin:"auto",padding:"20px"}}>
               <Text fontSize="30px" fontWeight="bold" textAlign="left" marginLeft="20px">FEATURED</Text>
                    <Image src="https://onemg.gumlet.io/a_ignore,q_auto,w_1062,f_auto,h_0/e9b154ad-f3c9-4d29-a3b0-e811775e4644.png" w="100%" marginTop="20px"/>
                    <Image src="https://onemg.gumlet.io/a_ignore,q_auto,w_1062,f_auto,h_0/4066c884-d21a-447e-8d64-f057c52b46a3.png" w="100%" marginTop="20px"/>
               <Text textAlign="left" fontSize="20px" fontWeight="bold" marginTop="30px" marginBottom="30px" marginLeft="20px">Top Deals</Text>
               <Box>
               <div style={{heigth:"200px",backgroundColor:"#fff",boxShadow:"0 0 7px 0 rgba(0,0,0,.14)"}}>
                         <div style={{width:"80%",margin:'auto',textAlign:"center",fontSize:"14px",fontFamily:"Clear Sans,Helvetica Neue,Helvetica,Arial,sans-serif", lineHeight:"1.42857143",color:"#212121"}}>
                         <Flex>
                            {
                            Deals.map((e)=>
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
               </Box>
               <Image src="https://onemg.gumlet.io/a_ignore,q_auto,w_1062,f_auto,h_0/e9b154ad-f3c9-4d29-a3b0-e811775e4644.png" w="100%" marginTop="20px"/>
              {/*  */}
              <Box>
              <Text textAlign="left" fontSize="20px" fontWeight="bold" marginTop="30px" marginBottom="30px" marginLeft="20px">All Products</Text>
              <Box>
              <Grid
  
  templateRows='repeat(auto, 1fr)'
  templateColumns='repeat(4, 1fr)'
  gap={4}
>
{
     categ.map((e)=>
     (
         <>
         <GridItem>
            <div key={e.id}>
             <Box  color="#212121" backgroundColor="#fff"  padding="30px" >
             <Image src={e.imageUrl} h="250px"></Image>
             <Text marginTop="10px" color="black" fontWeight="bold">{e.name}</Text>
             <Text color="gray">{e.discountText}</Text>
             <Text color="gray">{e.slug}</Text>
             <Button color="red" marginTop="10px" onClick={() => addToCart(e)}>ADD</Button>
         </Box>
         </div>
         </GridItem>

         </>
     ))}


</Grid>
              </Box>
              </Box>

             </div>
        </div>
        <AddToCart cart={cart} />
        <Footer />
    </div>
  )
}
export default AllData;