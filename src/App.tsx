import "./App.css";
import { Header } from "@/components/Header";
import { AppProvider } from "@/providers/app";
import { PrefecturesList } from "@/features/prefectures";

function App() {
  return (
    <AppProvider>
      <Header />
      <PrefecturesList />
    </AppProvider>
  );
}

export default App;
