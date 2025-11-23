"use client";

import { Button } from "@app-components/ui";

type IframeErrorProps = {
  retryFetchIframe: () => void;
};

export const IframeError = ({ retryFetchIframe }: IframeErrorProps) => {
  return (
    <>
      <p className="text-3xl font-bold text-center">Failed to load </p>
      <div className="h-44 flex justify-center items-center">
        <Button size="lg" onClick={retryFetchIframe}>
          Retry
        </Button>
      </div>
    </>
  );
};
