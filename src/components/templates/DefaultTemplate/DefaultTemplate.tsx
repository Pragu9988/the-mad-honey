import React from "react";
import { IPage } from "@/types";
import { sanitize } from "@/utils/sanitize.uitls";

const DefaultTemplate = (props: IPage) => {
  const { title, content, id } = props;
  return (
    <div id={`page-${id}`} className="page-content py-5 md:py-8 lg:py-16">
      <div className="container mx-auto">
        <h1
          className="h1 tw-mb-4 md:tw-mb-6 lg:tw-mb-10 text-center"
          dangerouslySetInnerHTML={{ __html: sanitize(title.rendered) }}
        ></h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: sanitize(content.rendered) }}
        ></div>
      </div>
    </div>
  );
};

export default DefaultTemplate;
