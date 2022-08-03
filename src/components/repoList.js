import React from "react";
import { Link } from "react-router-dom";
import { GlassCardRepo, StyledChip, DescriptionText, TitleText } from "./index";
import { Grid } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PublicIcon from "@mui/icons-material/Public";
import BugReportIcon from "@mui/icons-material/BugReport";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
export const RepoList = ({ repo }) => {
  return (
    <Link
      key={repo?.id}
      to={`/repos/${repo?.full_name}`}
      style={{ textDecoration: "none" }}
    >
      <GlassCardRepo>
        <TitleText>{repo?.full_name}</TitleText>
        <DescriptionText>{repo?.description ?? ""}</DescriptionText>

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
        </Grid>
      </GlassCardRepo>
    </Link>
  );
};
