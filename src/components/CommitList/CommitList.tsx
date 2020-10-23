import React from "react";
import { format } from "date-fns";
import { Row, Col, ListGroup, Badge } from "react-bootstrap";

import { ICommit } from "../../models";

interface IProps {
  commits: ICommit[];
}

const CommitList: React.FC<IProps> = ({ commits }) => {
  console.log("commit", commits);
  return (
    <ListGroup>
      {commits &&
        commits.map((commit) => (
          <ListGroup.Item key={commit.sha}>
            <Row>
              <Col>{commit.commit.message}</Col>
              <Col style={{ display: "flex", justifyContent: "flex-end" }}>
                {format(new Date(commit.commit.committer.date), "MM/dd/yyyy")}
              </Col>
            </Row>
            <Row>
              <Col>
                <Badge variant="primary">{commit.author.login}</Badge>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default CommitList;
