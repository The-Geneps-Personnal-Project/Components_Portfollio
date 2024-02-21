import TextBoX from "../components/TextBox";
import WriothesleyBackground from "../components/WriothesleyBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <TextBoX string="This website was created to try to recreate different components found on the web"/>
      <WriothesleyBackground/>
      <TextBoX string="Bottom Line"/>
    </main>
  );
}
