import React from "react";
import { Link } from "react-router-dom";
import { StyledChip, TitleText, HeaderText } from "./styled/index";
import { Grid, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PublicIcon from "@mui/icons-material/Public";
import BugReportIcon from "@mui/icons-material/BugReport";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ListAltIcon from "@mui/icons-material/ListAlt";
export const RepoCard = ({ repo }) => {
  return (
    <>
      <Link to="/">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <ArrowBackIcon />
        </IconButton>
      </Link>

      <HeaderText>{repo?.full_name}</HeaderText>
      <TitleText>{repo?.description ?? ""}</TitleText>

      <Grid direction="row" spacing={1}>
        <StyledChip
          icon={<PublicIcon style={{ color: "gray" }} />}
          label={`${repo?.private ? "Private" : " Public"}`}
        />
        <StyledChip
          icon={<TextSnippetIcon style={{ color: "gray" }} />}
          label={repo?.language ?? "Empty"}
        />

        <StyledChip
          icon={<VisibilityIcon style={{ color: "gray" }} />}
          label={`${repo?.watchers} Watchers`}
        />

        <StyledChip
          icon={<BugReportIcon style={{ color: "gray" }} />}
          label={`${repo?.open_issues} Issues`}
        />

        <StyledChip
          icon={<ListAltIcon style={{ color: "gray" }} />}
          label={`${
            repo?.topics?.length > 0 ? repo?.topics?.join(", ") : "No Topics"
          }`}
        />
      </Grid>
    </>
  );
};
