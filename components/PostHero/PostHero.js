import React from "react";
import { format } from "date-fns";

function PostHero({ title, publishedOn, className, ...delegated }) {
  const formattedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <div {...delegated}>
      <div>
        <h1>{title}</h1>
        <p>
          Published on <time dateTime={publishedOn}>{formattedDate}</time>
        </p>
      </div>
    </div>
  );
}

export default PostHero;
