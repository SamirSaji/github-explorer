import React, { useState } from "react";
import {
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
  Skeleton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  RootDiv,
  GlassCardContainer,
  HeaderText,
  SearchBar,
  SearchBarPaper,
  RepoContainer,
  RepoList,
} from "../../components";
import { NetworkCall } from "../../networkcall";
import { NetWorkCallMethods } from "../../utils/constants";

const HomePage = (props) => {
  // States
  const [repoType, setRepoType] = useState("orgs");
  const [inputData, setInputData] = useState("");
  const [repoData, setRepoData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  // handle Functions
  const handleRepoType = (event, type) => {
    setRepoType(type);
  };
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Fetch Newwork Hook
    await NetworkCall(
      `/${repoType}/${inputData}/repos`,
      NetWorkCallMethods.get,
      {},
      {
        "Content-Type": "application/json",
      }
    )
      .then((res) => {
        setLoading(false);

        setIsError(false);
        setRepoData(res?.data);
      })
      .catch((err) => {
        setLoading(false);

        setIsError(true);
        console.log(err);
      });
  };

  return (
    <RootDiv>
      <GlassCardContainer xs={12}>
        <HeaderText>GitHub Explorer</HeaderText>
        <ToggleButtonGroup
          color="secondary"
          value={repoType}
          exclusive
          onChange={handleRepoType}
          sx={{ pb: 2, pt: 1 }}
        >
          <ToggleButton value="orgs">Org</ToggleButton>
          <ToggleButton value="users">User</ToggleButton>
        </ToggleButtonGroup>
        {/* Search Bar */}
        <SearchBarPaper component="form" onSubmit={handleSearch}>
          <SearchBar
            sx={{ ml: 1, flex: 1 }}
            placeholder={`Search ${
              repoType === "orgs" ? "Organization" : "User"
            } Repositories`}
            inputProps={{ "aria-label": "Search Organization" }}
            onChange={handleInputChange}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSearch}
          >
            <SearchIcon color="primary" />
          </IconButton>
        </SearchBarPaper>
      </GlassCardContainer>

      {/* loading */}
      {loading ? (
        <GlassCardContainer style={{ marginTop: "20px" }}>
          <Skeleton animation="wave" height={15} />
        </GlassCardContainer>
      ) : (
        // List Data
        <>
          {repoData?.length > 0 && !isError && (
            <RepoContainer>
              <HeaderText>Repository List</HeaderText>
              {repoData?.map((repo) => (
                <RepoList repo={repo} key={repo?.id} />
              ))}
            </RepoContainer>
          )}
          {/* Error */}
          {isError && (
            <RepoContainer>
              <HeaderText>Not Found!</HeaderText>
            </RepoContainer>
          )}
        </>
      )}
    </RootDiv>
  );
};

export default HomePage;
