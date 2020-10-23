interface ICommitDetails {
  url: string;
  author: {
    name: string;
    email: string;
    date: string;
  };
  committer: {
    name: string;
    email: string;
    date: string;
  };
  message: string;
}

interface IAuthor {
  id: number;
  login: string;
}

export interface ICommit {
  url: string;
  sha: string;
  node_id: string;

  html_url: string;
  comments_url: string;
  commit: ICommitDetails;
  committer: {
    login: string;
  };
  author: IAuthor;
}
