import React from "react";
import { Dropdown } from "react-bootstrap";

import { IBranch } from "../../models";

interface IProps {
  current?: IBranch;
  branches: IBranch[];
  onChange: (branch: IBranch) => void;
}

const SelectBranch: React.FC<IProps> = ({ current, branches, onChange }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {current && current.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {branches &&
          branches.map((branch) => (
            <Dropdown.Item key={branch.name} onClick={() => onChange(branch)}>
              {branch.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SelectBranch;
