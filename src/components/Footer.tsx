import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.default", borderTop: "1px solid", borderColor: "divider", py: 4 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight={800} sx={{ fontFamily: `"Playfair Display", serif` }}>
              {profile.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} {profile.name}. Built with technical rigor.
            </Typography>
          </Box>
          <Stack direction="row" spacing={3}>
            <Typography
              component="a"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "none", "&:hover": { color: "primary.main" } }}
            >
              LinkedIn
            </Typography>
            <Typography
              component="a"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "none", "&:hover": { color: "primary.main" } }}
            >
              GitHub
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
