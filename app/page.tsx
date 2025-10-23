import Tab from "@/components/Tab";
import { tabs } from "@/data/cardsData";

export default function Home() {
  return (
    <div className="p-4 grid gap-4 justify-items-center md:grid-cols-2 2xl:grid-cols-4">
      {tabs.map((tab, index) => (
        <Tab key={tab.id} title={tab.title} cards={tab.cards} />
      ))}
    </div>
  );
}
