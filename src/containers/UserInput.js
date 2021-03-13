import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export default function UserInput() {
  const [user, setUser] = useState('');

  const onChange = useCallback((event) => {
    const { value } = event.target;
    setUser(value);
  }, [setUser]);

  return (
    <div>
      <input type="text" value={user} onChange={onChange} />
      <Link to={`/github_list/${user || 'none'}`}>Get list</Link>
    </div>
  );
}