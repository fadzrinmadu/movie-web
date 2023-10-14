import React from "react";

import "./style.scss";

const EmptyView = () => {
  return (
    <div className="empty-view">
      <p>No movies found. Please refine your search.</p>
    </div>
  );
};

export default EmptyView;
