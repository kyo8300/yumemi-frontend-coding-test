import "./App.css";
import { Header } from "@/components/Header";
import { AppProvider } from "@/providers/app";
import { PrefecturesList } from "@/features/prefectures";
import { PopulationCompositionGraphContainer } from "@/features/populationComposition";

function App() {
  return (
    <AppProvider>
      <Header />
      <PrefecturesList />
      <PopulationCompositionGraphContainer />
    </AppProvider>
  );
}

export default App;
