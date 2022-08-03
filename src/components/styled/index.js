import { styled } from "@mui/material/styles";
import { Typography, InputBase, Paper, Grid, Chip } from "@mui/material";
export const RootDiv = styled("div")(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const GlassCardContainer = styled("div")(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  padding: "20px",
  width: "90%",
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
}));

export const SearchBarPaper = styled(Paper)(({ theme }) => ({
  background: "#121212",
  color: "#fff",
  padding: "2px 4px",
  display: "flex",
}));

export const SearchBar = styled(InputBase)(({ theme }) => ({
  background: "#121212",
  color: "#fff",
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  color: "#fff",
}));
export const RepoContainer = styled(Grid)(({ theme }) => ({
  margin: "24px 0px",
  width: "90%",
  height: "40vh",
  overflow: "auto",
  [theme.breakpoints.up("md")]: {
    width: "50%",
    margin: "32px 0px",
  },
}));

export const GlassCardRepo = styled("div")(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  padding: "16px 20px",
  margin: "20px 0px",
  color: "#fff",
  fontSize: "20px",
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  color: "#fff",
  fontSize: "12px",
  margin: "4px 0px",
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  color: "#fff",
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#fff",
}));
