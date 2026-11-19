import Image from "next/image";

export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white px-6 text-center">
      <Image
        src="/Logo.png"
        alt="Paradigm"
        width={220}
        height={74}
        priority
        className="h-auto w-44 sm:w-56"
      />
      <h1 className="text-xl font-medium text-[#1a3013] sm:text-2xl">
        Website is under maintenance
      </h1>
    </main>
  );
}
