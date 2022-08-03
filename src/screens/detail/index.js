import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import {
  RootDiv,
  GlassCardContainer,
  HeaderText,
  RepoCard,
} from "../../components";
import { Skeleton } from "@mui/material";
import { NetworkCall } from "../../networkcall";
import { NetWorkCallMethods } from "../../utils/constants";
const DetailPage = (props) => {
  let { pathname } = useLocation();

  // States
  const [repoData, setRepoData] = useState({});
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  // LifeCycle & Side effects
  useEffect(() => {
    setLoading(true);
    NetworkCall(
      pathname,
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
    // eslint-disable-next-line
  }, []);

  return (
    <RootDiv>
      <GlassCardContainer xs={12}>
        {/* Loading */}
        {loading ? (
          <Skeleton animation="wave" height={200} />
        ) : (
          <>
            {/* Repo Details Card */}
            {repoData &&
              Object.keys(repoData).length === 0 &&
              Object.getPrototypeOf(repoData) === Object.prototype &&
              isError && <HeaderText>Not Found!</HeaderText>}
            {repoData && repoData?.name && <RepoCard repo={repoData} />}
          </>
        )}
      </GlassCardContainer>
    </RootDiv>
  );
};

export default DetailPage;
