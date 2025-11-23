"use client";

import { useRouter } from "next/navigation";
import { Button } from "@app-components/ui";
import { ChevronLeft } from "lucide-react";

export const BackButton = () => {
  const router = useRouter();

  return (
    <div>
      <Button variant="default" size="sm" onClick={() => router.back()}>
        <ChevronLeft />
      </Button>
    </div>
  );
};
