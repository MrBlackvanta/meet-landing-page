import { LogoIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <header>
        <LogoIcon role="img" aria-label="Meet" />
      </header>

      <main className="flex-1">
        <h1>Group Chat for Everyone</h1>
      </main>
    </>
  );
}
