import { Button } from "@heroui/button";
import { HeroUIProvider } from "@heroui/system";

function App() {
  return (
    <HeroUIProvider>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Button color="primary">Click me</Button>
    </HeroUIProvider>
  );
}

export default App;
