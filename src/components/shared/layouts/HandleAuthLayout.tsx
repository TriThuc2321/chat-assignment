export default function HandleAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="h-fit w-full max-w-[96vw] rounded-lg p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-sm backdrop-filter sm:max-w-[480px] sm:p-7">
        {children}
      </div>
    </div>
  );
}
