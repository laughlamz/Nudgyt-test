import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import TopBar from "../components/TopBar";

export default function UserInput() {
  const history = useHistory();
  const [user, setUser] = useState('');

  const onChange = useCallback((event) => {
    const { value } = event.target;
    setUser(value);
  }, [setUser]);

  const onSubmit = useCallback(() => {
    history.push(`/github_list/${user || 'none'}`);
  }, [history, user]);

  return (
    <div>
      <TopBar />
      <form onSubmit={onSubmit}>
        <InputGroup onSubmit={onSubmit}>
          <InputGroupText>Get list repo</InputGroupText>
          <Input type="text" value={user} onChange={onChange} />
        </InputGroup>
      </form>
    </div>
  );
}