import React from 'react';

function Links({ githubLink, linkedinLink }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={githubLink}>GitHub</a>
      <a href={linkedinLink}>LinkedIn</a>
    </div>
  );
}

export default Links;