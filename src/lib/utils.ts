import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const handleFullScreen = async (
  ref: React.RefObject<HTMLDivElement | null>
) => {
  const element = ref.current;
  if (!element) return;
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (element.requestFullscreen) await element.requestFullscreen();
  } catch (e) {
    toast.error("Fullscreen failed");
  }
};
