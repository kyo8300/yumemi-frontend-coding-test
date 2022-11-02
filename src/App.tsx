import { Suspense } from "react";
import "./App.css";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { AppProvider } from "@/providers/app";
import { PrefecturesList } from "@/features/prefectures";
import { PopulationCompositionGraphContainer } from "@/features/populationComposition";

function App() {
  return (
    <AppProvider>
      <Header />
      <Suspense fallback={<Loading />}>
        <PrefecturesList />
      </Suspense>
      <PopulationCompositionGraphContainer />
    </AppProvider>
  );
}

export default App;
