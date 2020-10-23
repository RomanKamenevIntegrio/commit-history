import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { getCommitList } from "./services";
import { ICommit } from "./models";
import NavBar from "./components/NavBar";
import CommitList from "./components/CommitList";

const App: React.FC = () => {
  const [commits, setCommits] = useState<ICommit[]>([]);

  const fetchData = async () => {
    const commitList = await getCommitList();

    setCommits(commitList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>History</Col>
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
