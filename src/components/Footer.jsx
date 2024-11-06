import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  Link,
  Typography,
} from "@mui/material";
import { FooterContainer } from "../styles/FooterStyles";
import whatsappSvg from "../assets/whatsapp.svg";
import gmailSvg from "../assets/gmail.svg";
import linkedinSvg from "../assets/linkedin.svg";

const contacts = [
  {
    title: "WhatsApp",
    header: "Reach on WhatsApp",
    icon: whatsappSvg,
    link: "https://wa.me/+919572068200?text=Hi%20Nikhil%20got%20your%20contact%20from%20your%20portfolio",
  },
  {
    title: "Gmail",
    header: "Email me",
    icon: gmailSvg,
    link: "mailto:nikhilanandgaya01@gmail.com",
  },
  {
    title: "LinkedIn",
    header: "Connect on LinkedIn",
    icon: linkedinSvg,
    link: "https://www.linkedin.com/in/nikhil-anand-0792981b2/",
  },
];

function Footer() {
  return (
    <FooterContainer>
      <Box>
        <Grid2 container spacing={2}>
          {contacts.map((contact, index) => (
            <Grid2 item size={{ xs: 12, md: 4 }} key={index}>
              <Link href={contact.link} underline="none">
                <Card>
                  <CardContent>
                    <img
                      src={contact.icon}
                      alt={contact.title}
                      width="80"
                      height="80"
                    />
                  </CardContent>
                  <CardHeader
                    title={contact.title}
                    subheader={contact.header}
                  />
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 2,
            color: "text.secondary",
          }}
        >
          © {new Date().getFullYear()} Nikhil Anand. None rights reserved. Clone
          and use it.
        </Typography>
      </Box>
    </FooterContainer>
  );
}

export default Footer;
