import React from "react";
import { Pagination as P } from "semantic-ui-react";
import { useRouter } from "next/router";

export interface PaginationProps {
  activePage: number;
  totalPages: number;
  url: (activePage: string) => string;
}

export const Pagination: React.FC<PaginationProps> = ({
  activePage,
  totalPages,
  url,
}) => {
  const router = useRouter();
  if (totalPages > 1) {
    return (
      <P
        boundaryRange={0}
        activePage={activePage}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={totalPages}
        size="small"
        onPageChange={(event, data) => {
          router
            .push(
              router.pathname === "/" ? "/posts/[page]" : router.pathname,
              url(data.activePage.toString()),
            )
            .then(() => window.scrollTo(0, 0));
        }}
      />
    );
  }
  return <></>;
};
