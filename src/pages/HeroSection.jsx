import { Box, Typography, Avatar } from "@mui/material";
import theme from "../styles/Theme";

export default function HeroSection() {
  return (
    <Box
      sx={{
        ...theme.customStyles.boxStyle,
      }}
    >
      <Avatar
        src="https://firebasestorage.googleapis.com/v0/b/project-cd64f.appspot.com/o/images%2Ff473e71d-b441-4bcd-941e-c9d9f07e61d3?alt=media&token=56836c8b-b1e2-4e4d-b5ee-99c423f7c415"
        alt="Profile Picture"
        sx={{
          height: 200,
          width: 200,
          border: "2px solid #fff", // Optional border
          boxShadow: 3, // Optional shadow
        }}
      />
      <Typography variant="h4" sx={{ marginTop: 2 }}>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="caption" sx={{ textAlign: "center", marginTop: 1 }}>
        I&apos;m a web developer specializing in front-end and back-end
        development.
      </Typography>
    </Box>
  );
}
