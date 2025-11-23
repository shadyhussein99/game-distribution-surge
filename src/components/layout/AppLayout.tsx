import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <main className="flex min-h-screen items-center font-sans dark:bg-black">
      <div className="flex min-h-screen w-full flex-col items-center pt-12 pb-32 px-[6%] dark:bg-black sm:items-start">
        <div className="min-h-screen w-full bg-background pb-12">
          <div className="mx-auto">{children}</div>
        </div>
      </div>
    </main>
  );
};
