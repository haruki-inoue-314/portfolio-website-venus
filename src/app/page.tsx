import SelfIntroduction from "@/components/SelfIntroduction";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main>
        <div className="relative w-full">
          <div className="flex justify-center">
            <h1 className="text-4xl p-2">3.14 Laboratory</h1>
          </div>
        </div>
        <SelfIntroduction />
      </main>
    </div>
  );
}
