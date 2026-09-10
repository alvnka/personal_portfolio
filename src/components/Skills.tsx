import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { techStack, certifications, education } from "../data/content";



export default function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Detailed tech stack */}
        <Stack spacing={1} alignItems="center" textAlign="center" mb={4}>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3rem" } }}>
            Technical Expertise
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A comprehensive overview of my technical stack, certifications, and academic background.
          </Typography>
        </Stack>

        <Grid container spacing={3} mb={8}>
          {[
            { title: "Languages & Frameworks", items: techStack.languages },
            { title: "Cloud & DevOps", items: techStack.cloud },
            { title: "Databases & Architecture", items: techStack.databases },
            { title: "Tools & Methodologies", items: techStack.tools },
          ].map((block) => (
            <Grid key={block.title} item xs={12} sm={6}>
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, height: "100%" }}>
                <Typography variant="subtitle1" fontWeight={700} mb={1.5}>
                  {block.title}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {block.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: "divider", color: "text.secondary" }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Education & Certifications */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={1} alignItems="center" mb={3}>
              <SchoolIcon color="primary" />
              <Typography variant="h5" fontWeight={700}>
                Education
              </Typography>
            </Stack>
            <Stack spacing={3}>
              {education.map((ed) => (
                <Box key={ed.title} sx={{ pl: 2, borderLeft: "2px solid", borderColor: "primary.main" }}>
                  <Typography variant="caption" color="primary.main" fontWeight={700}>
                    {ed.period}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {ed.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ed.institution}
                  </Typography>
                  {ed.description && (
                    <Typography variant="body2" color="text.secondary">
                      {ed.description}
                    </Typography>
                  )}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={1} alignItems="center" mb={3}>
              <WorkspacePremiumIcon color="primary" />
              <Typography variant="h5" fontWeight={700}>
                Certifications
              </Typography>
            </Stack>
            <Stack spacing={2}>
              {certifications.map((cert) => (
                <Paper key={cert.title} variant="outlined" sx={{ p: 2.5, borderRadius: 3 }}>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="primary.main" fontWeight={600}>
                    {cert.issuer} · {cert.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    {cert.description}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
