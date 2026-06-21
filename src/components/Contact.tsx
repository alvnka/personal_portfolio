import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { profile } from "../data/content";

const contactCards = [
  { icon: <EmailIcon color="primary" />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: <LinkedInIcon color="primary" />, label: "LinkedIn", value: "alvinndunguk", href: profile.linkedin },
  { icon: <GitHubIcon color="primary" />, label: "GitHub", value: "alvnka", href: profile.github },
];

export default function Contact() {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <Stack alignItems="center" textAlign="center" spacing={2} mb={6}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" } }}>
            Let's Build Something Together
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={560}>
            Currently available for collaboration on ML Research or high-scale Full-Stack
            projects. Reach out via my social channels or drop an email.
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          {contactCards.map((card) => (
            <Grid key={card.label} item xs={12} sm={4}>
              <Paper
                component="a"
                href={card.href}
                target={card.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  p: 2.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  borderRadius: 3,
                  textDecoration: "none",
                  color: "inherit",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  "&:hover": { boxShadow: 4, borderColor: "primary.main" },
                }}
              >
                {card.icon}
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    {card.label}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={700}>
                    {card.value}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
