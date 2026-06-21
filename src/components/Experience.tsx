import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Box id="experience" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary.main" fontWeight={700} letterSpacing={2}>
          CAREER JOURNEY
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3rem" }, mb: 2 }}>
          Professional Experience
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth={620} mb={6}>
          Bridging the gap between high-level product strategy and low-level architectural
          execution, with hands-on contributions to full-stack systems and ML research.
        </Typography>

        <Stack spacing={4} sx={{ position: "relative" }}>
          {/* vertical timeline line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 10, md: "50%" },
              top: 12,
              bottom: 12,
              width: 2,
              bgcolor: "divider",
              display: { xs: "none", sm: "block" },
            }}
          />

          {experience.map((job, idx) => (
            <Box key={job.role} sx={{ position: "relative", pl: { xs: 4, sm: 0 } }}>
              {/* node */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 4, md: "50%" },
                  top: 8,
                  transform: { md: "translateX(-50%)" },
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  border: "3px solid",
                  borderColor: "background.paper",
                  boxShadow: 1,
                  display: { xs: "none", sm: "block" },
                  zIndex: 1,
                }}
              />

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                sx={{
                  ml: { md: idx % 2 === 0 ? 0 : "52%" },
                  mr: { md: idx % 2 === 0 ? "52%" : 0 },
                  textAlign: { md: idx % 2 === 0 ? "right" : "left" },
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <Chip
                    label={job.period}
                    size="small"
                    sx={{ bgcolor: "rgba(156,28,50,0.08)", color: "primary.main", fontWeight: 600, mb: 1 }}
                  />
                  <Typography variant="h5" fontWeight={800}>
                    {job.role}
                  </Typography>
                  <Typography variant="subtitle1" color="primary.main" fontWeight={700} mb={2}>
                    {job.company}
                  </Typography>
                </Box>
              </Stack>

              <Box sx={{ ml: { md: idx % 2 === 0 ? "52%" : 0 }, mr: { md: idx % 2 === 0 ? 0 : "52%" } }}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="body2" color="text.secondary" fontStyle="italic" mb={1.5}>
                    {job.summary}
                  </Typography>
                  <List dense disablePadding>
                    {job.bullets.map((bullet) => (
                      <ListItem key={bullet} disableGutters sx={{ alignItems: "flex-start", py: 0.4 }}>
                        <ListItemIcon sx={{ minWidth: 24, mt: 0.7 }}>
                          <FiberManualRecordIcon sx={{ fontSize: 7, color: "primary.main" }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={bullet}
                          primaryTypographyProps={{ variant: "body2", color: "text.secondary" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" mt={2}>
                    {job.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </Paper>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
