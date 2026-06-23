import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { profile } from "../data/content";

/**
 * Hero section.
 *
 * Background image provision: drop a file at `/public/hero-bg.jpg`
 * (or change HERO_BG_URL below to any image path / URL) and it will
 * render behind the hero content, fading out smoothly as the user
 * scrolls down the page.
 */
const HERO_BG_URL = `${import.meta.env.BASE_URL}hero.png`;

export default function Hero() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const fadeDistance = window.innerHeight * 0.9;
      const next = Math.max(0, 1 - window.scrollY / fadeDistance);
      setOpacity(next);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "100vh", md: "110vh" },
        display: "flex",
        alignItems: "center",
        pt: { xs: 16, md: 0 },
        pb: { xs: 10, md: 0 },
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      {/* Background image layer — fades out on scroll */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(180deg, rgba(251,244,242,0.55) 0%, rgba(251,244,242,0.85) 100%), url(${HERO_BG_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity,
          transition: "opacity 0.1s linear",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={3} maxWidth={760}>
          <Chip
            icon={<FiberManualRecordIcon sx={{ fontSize: 10, color: "primary.main" }} />}
            label={profile.availability.toUpperCase()}
            sx={{
              alignSelf: "flex-start",
              bgcolor: "rgba(156,28,50,0.08)",
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: 0.5,
              "& .MuiChip-icon": { ml: 1 },
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.2rem", md: "4rem" },
              lineHeight: 1.1,
              color: "text.primary",
            }}
          >
            {profile.heroTitlePrimary}{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              · {profile.heroTitleSecondary}
            </Box>
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 600 }}>
            {profile.heroSubtitle}
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={1}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="#projects"
            >
              View Portfolio
            </Button>
            <Button variant="outlined" color="secondary" size="large" href="#contact">
              Get in Touch
            </Button>
            <Button variant="text" color="primary" size="large" href={`${import.meta.env.BASE_URL}Alvin_Ndungu_CV.pdf`} download>
              Download Resume
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
