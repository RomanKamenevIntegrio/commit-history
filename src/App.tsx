import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { getCommitList, getBranchList, getRepo } from "./services";
import { ICommit, IBranch } from "./models";
import NavBar from "./components/NavBar";
import CommitList from "./components/CommitList";
import SelectBranch from "./components/SelectBranch";

const App: React.FC = () => {
  const [commits, setCommits] = useState<ICommit[]>([]);
  const [branches, setBranches] = useState<IBranch[]>([]);
  const [currentBranch, setCurrentBranch] = useState<IBranch>();

  const fetchData = async () => {
    const commitList = await getCommitList();
    const branchList = await getBranchList();
    const repo = await getRepo();

    setCommits(commitList);
    setBranches(branchList);
    const defaultBranch = branchList.filter(
      (branch: IBranch) => branch.name === repo.default_branch
    )[0];
    setCurrentBranch(defaultBranch);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBranchChange = async (branch: IBranch) => {
    setCurrentBranch(branch);
    const commitList = await getCommitList(branch.commit.sha);
    setCommits(commitList);
  };

  return (
    <div>
      <NavBar />
      <Container style={{ paddingTop: 20 }}>
        <Row>
          <Col>
            <h6>History</h6>
          </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col style={{ display: "flex", justifyContent: "flex-end" }}>
            <SelectBranch
              current={currentBranch}
              branches={branches}
              onChange={handleBranchChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CommitList commits={commits} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
