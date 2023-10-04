import { Grid, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-3" variant="h6">
            Artisan's Alley
          </Typography>
          <Typography variant="body2" gutterBottom>
            Crafting Dreams, Crafting Artistry, Crafting You.
          </Typography>
          <div>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>

            <a href="https://twitter.com/">
              <TwitterIcon />
            </a>

            <a href="https://telegram.org/">
              <TelegramIcon />
            </a>
            <a href="https://www.whatsapp.com/">
              <WhatsAppIcon />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={5}></Grid>
        <Grid item xs={12} sm={6} md={1}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/t&s")}
          >
            T&C
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/policy")}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/faq")}
          >
            FAQ's
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Pages
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/about")}
            >
            About Us
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/contact")}
            >
            Contact Us
          </Typography>
        </Grid>
        <Grid className="pt-15" item xs={10}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 Artisan's Alley. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with React JS.
          </Typography>
        </Grid>
        <Grid></Grid>
      </Grid>
    </div>
  );
};

export default Footer;
