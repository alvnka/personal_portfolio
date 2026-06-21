import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { navLinks, profile } from "../data/content";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: scrolled ? "rgba(251,244,242,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid" : "1px solid transparent",
        borderColor: "divider",
        transition: "all 0.25s ease",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontFamily: `"Playfair Display", serif`, fontWeight: 800, cursor: "pointer", fontSize: 20 }}
            onClick={() => handleNav("#home")}
          >
            {profile.name}
          </Typography>

          {!isMobile && (
            <Stack direction="row" spacing={4} alignItems="center">
              {navLinks.map((link) => (
                <Typography
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  sx={{
                    cursor: "pointer",
                    fontWeight: 500,
                    fontSize: 15,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
              <Button variant="contained" color="primary" href="/Alvin_Ndungu_CV.pdf" download>
                Download CV
              </Button>
            </Stack>
          )}

          {isMobile && (
            <IconButton onClick={() => setOpen(true)} color="inherit" aria-label="open menu">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 240, pt: 2 }}>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton onClick={() => handleNav(link.href)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ mt: 1 }}>
            <Button fullWidth variant="contained" color="primary" href="/Alvin_Ndungu_CV.pdf" download>
              Download CV
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
