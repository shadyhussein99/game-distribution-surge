import { useState } from "react";

/**
 * useIframe is a hook that provides state and functions to manage the loading and error state of an iframe.
 *
 * The hook returns an object with the following properties:
 * - isLoading: a boolean that indicates whether the iframe is currently loading
 * - isError: a boolean that indicates whether the iframe has encountered an error
 * - iframeKey: a number that is incremented each time the iframe is reloaded
 * - handleIframeLoad: a function that is called when the iframe has finished loading
 * - handleIframeError: a function that is called when the iframe encounters an error
 * - retryFetchIframe: a function that reloads the iframe and resets the loading and error state
 */
export const useIframe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setIsError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  const retryFetchIframe = () => {
    setIsLoading(true);
    setIsError(false);
    setIframeKey((prev) => prev + 1);
  };

  return {
    isLoading,
    isError,
    iframeKey,
    handleIframeLoad,
    handleIframeError,
    retryFetchIframe,
  };
};
