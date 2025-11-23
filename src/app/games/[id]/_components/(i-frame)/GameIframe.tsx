"use client";

import { useRef } from "react";
import { Button, Spinner } from "@app-components/ui";
import type { Game } from "@app-types/index";
import { handleFullScreen } from "@app-lib/utils";
import { useIframe } from "../../_hooks/useIframe";
import { IframeError } from "./IframeError";

type GameIframeProps = {
  selectedGame: Game;
};

export const GameIframe = ({ selectedGame }: GameIframeProps) => {
  const iframeWrapperRef = useRef<HTMLDivElement | null>(null);
  const {
    isError,
    iframeKey,
    handleIframeLoad,
    handleIframeError,
    retryFetchIframe,
  } = useIframe();

  // Handle iframe error
  if (isError) return <IframeError retryFetchIframe={retryFetchIframe} />;

  // Handle iframe success
  return (
    <>
      <div
        ref={iframeWrapperRef}
        className="relative w-full aspect-video bg-black rounded-md shadow-lg overflow-hidden"
      >
        <iframe
          key={iframeKey}
          src={selectedGame.iframeURL}
          title={selectedGame.title}
          className="w-full h-full border-0"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-forms allow-presentation"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />

        <div className="absolute top-2 right-2">
          <Button
            size="sm"
            variant="default"
            onClick={() => handleFullScreen(iframeWrapperRef)}
          >
            <p className="text-2xl">⤢</p>
          </Button>
        </div>
      </div>
    </>
  );
};
