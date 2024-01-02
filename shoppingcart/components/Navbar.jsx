import React from "react";
import { Box, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"} height={"50px"} backgroundColor={"#eee"}>
        <Button>
            shopping
        </Button>
      </Box>
    </>
  );
};

export default Navbar;
