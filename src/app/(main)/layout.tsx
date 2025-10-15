import BottomTab from "@/components/BottomTab";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-x-hidden">
      <main className="max-w-6xl w-full mx-auto px-6 sm:px-10 mb-16">
        {children}
      </main>
      <BottomTab />
    </div>
  );
};

export default MainLayout;
