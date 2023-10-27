import FormValid from "@/components/FormValid";
import useThemeStore from "@/theme";
import { Button } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <>
      <FormValid />
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </>
  );
}
