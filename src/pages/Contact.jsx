import { forwardRef, useState } from "react";
import { ContactContainer } from "../styles/ContactStyles";
import { TextField, Button, Box, Typography, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contact() {
  // Define state variables for form fields and alert
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  // Handle form submission
  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending message", { name, email, message });

      const resp = await axios.post(
        "https://us-central1-flyweis-project.cloudfunctions.net/api/portfolio-message/",
        {
          name,
          email,
          message,
        }
      );

      // Set alert message and open the alert
      setAlertMessage("Message sent successfully!");
      setOpen(true);

      // Reset form fields after submission
      setName("");
      setEmail("");
      setMessage("");

      // Close the alert after 3 seconds
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setAlertMessage("Failed to send message.");
      setOpen(true);

      // Close the alert after 3 seconds
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  return (
    <ContactContainer>
      <Typography variant="h4" gutterBottom sx={{ color: "secondary.main" }}>
        Contact Me
      </Typography>
      <Box
        component="form"
        onSubmit={sendMessage}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Your Name"
          variant="outlined"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Your Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Your Message"
          variant="outlined"
          name="message"
          value={message}
          onChange={handleChange}
          multiline
          rows={5}
          required
        />
        <Button variant="contained" type="submit">
          Send Message
        </Button>
      </Box>

      {/* Snackbar for alert messages */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={alertMessage.includes("Failed") ? "error" : "success"}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </ContactContainer>
  );
}

export default Contact;
