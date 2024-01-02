import React from "react";
import {Box, Image} from "@chakra-ui/react";

const ProductItem = () => {
    return ( 
        <Box display={"flex"} flexDir={"column"} width={"300px"} height={"100%"} boxShadow={"lg"} background={"#eee"}>
            <Image width={"250px"} height={"270px"} margin={"0 auto"} marginTop={"20px"} borderRadius={"10px"} boxShadow={"lg"} objectFit={"cover"}/>
        </Box>
     );
}
 
export default ProductItem;