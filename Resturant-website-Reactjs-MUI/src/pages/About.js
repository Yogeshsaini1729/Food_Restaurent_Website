import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Welcome to our food restaurant, where we strive to create an exceptional dining experience for every guest. Our passion for culinary excellence drives us to serve you the finest dishes made with the freshest ingredients and an abundance of love. At our restaurant, we believe that food is not just about taste; it's an art that brings people together. Our diverse menu features a delightful range of flavors, inspired by various cuisines from around the world. From traditional favorites to modern creations, each dish is carefully crafted to tantalize your taste buds and leave you with an unforgettable gastronomic journey.
        </p>
        <br />
        <p>
        At our restaurant, we take pride in our warm and inviting ambiance, designed to make you feel at home. Our friendly and attentive staff is always ready to assist you, ensuring that every moment of your visit is enjoyable. Whether you're here for a casual lunch, a romantic dinner, or a special celebration, we promise to deliver an unparalleled dining experience. We also cater to specific dietary preferences, providing vegetarian and vegan options that are equally delicious and satisfying. As a food restaurant dedicated to excellence, we are committed to providing you with a memorable dining experience that will keep you coming back for more. Join us on this culinary adventure, and let us indulge your senses with the flavors and aromas that make dining truly delightful.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
