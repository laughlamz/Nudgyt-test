import React, { useState } from "react";

export default function GituserInput() {
  const [gituser, setGituser] = useState('');

  const onChange = (event) => {
    const { value } = event.target;
    setGituser(value);
  }
  console.log(gituser)

  return (
    <div>
        <input type="text" value={gituser} onChange={onChange} />
        X: {gituser}
    </div>
  );
}

// https://api.github.com/users/laughlamz/repos?per_page=3