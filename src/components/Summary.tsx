import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { profile, stats } from "../data/content";

export default function Summary() {
  return (
    <Box component="section" sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.4rem" }, mb: 2 }}>
              Professional Summary
            </Typography>
            <Box sx={{ width: 56, height: 3, bgcolor: "primary.main", mb: 3 }} />
            <Typography
              variant="body1"
              sx={{ fontStyle: "italic", color: "text.secondary", fontSize: "1.05rem" }}
            >
              "Driving technical rigor through architectural excellence and research-backed
              implementation."
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Stack spacing={3} justifyContent={"center"} alignItems={'center'}>
              <Paper
                variant="outlined"
                sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, bgcolor: "background.default" }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" mb={1.5}>
                  <AutoAwesomeIcon color="primary" fontSize="small" />
                  <Typography variant="h6" fontWeight={700}>
                    Engineering Philosophy
                  </Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                  {profile.philosophy}
                </Typography>
              </Paper>
              <Grid container spacing={3} px={3}>
                {stats.map((stat) => (
                  <Grid key={stat.label} item xs={12} sm={4}>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: 3,
                        height: "100%",
                        borderRadius: 3,
                        bgcolor: "background.default",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="h4"
                        color="primary.main"
                        sx={{ fontFamily: "inherit", fontWeight: 800 }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={700} sx={{ mt: 0.5 }}>
                        {stat.label.toUpperCase()}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5, maxWidth: 260, mx: "auto" }}
                      >
                        {stat.caption}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
