import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { projects } from "../data/content";
import Avatar from "@mui/material/Avatar";
import StorageIcon from "@mui/icons-material/Storage";
import DevicesIcon from "@mui/icons-material/Devices";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { skillGroups } from "../data/content";


export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const iconMap: Record<string, React.ReactNode> = {
    storage: <StorageIcon />,
    devices: <DevicesIcon />,
    psychology: <PsychologyIcon />,
  };
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
        <Stack alignItems="center" textAlign="center" spacing={1} mb={6}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3rem" } }}>
            Technical Rigor
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A comprehensive toolkit for modern software development.
          </Typography>
        </Stack>
        <Grid container spacing={3} mb={8}>
          {skillGroups.map((group) => (
            <Grid key={group.title} item xs={12} md={4}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  borderColor: "divider",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  "&:hover": { boxShadow: 4, borderColor: "primary.main" },
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
                  <Avatar sx={{ bgcolor: "primary.main", width: 36, height: 36 }}>
                    {iconMap[group.icon]}
                  </Avatar>
                  <Typography variant="h6" fontWeight={700}>
                    {group.title}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {group.skills.map((skill) => {
                    const isFeatured = group.featured?.includes(skill);
                    return (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={
                          isFeatured
                            ? { bgcolor: "primary.main", color: "white", fontWeight: 600 }
                            : {
                              bgcolor: "transparent",
                              border: "1px solid",
                              borderColor: "divider",
                              color: "text.secondary",
                            }
                        }
                      />
                    );
                  })}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
        <Stack alignItems="center" textAlign="center" spacing={1} mb={6}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3rem" } }}>
            Portfolio &amp; Side Works
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={560}>
            A showcase of technical rigor and architectural cleanliness across full-stack
            development and applied ML.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {featured && (
            <Grid item xs={12}>
              <Paper
                variant="outlined"
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  position: "relative",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #161C2D 0%, #3A4255 100%)",
                  color: "white",
                }}
              >
                <Chip
                  label="Featured Work"
                  size="small"
                  sx={{ bgcolor: "primary.main", color: "white", fontWeight: 600, mb: 2 }}
                />
                <Stack direction="row" spacing={1.5} alignItems="center" mb={1}>
                  <RocketLaunchIcon />
                  <Typography variant="h4" fontWeight={800}>
                    {featured.title}
                  </Typography>
                </Stack>
                <Typography variant="body1" sx={{ opacity: 0.85, maxWidth: 640, mb: 2.5 }}>
                  {featured.description}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {featured.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{ bgcolor: "rgba(255,255,255,0.12)", color: "white" }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          )}

          {rest.map((project) => (
            <Grid key={project.title} item xs={12} md={6}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                  "&:hover": { boxShadow: 4, borderColor: "primary.main" },
                }}
              >
                <Typography variant="h6" fontWeight={700} mb={1}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {project.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
