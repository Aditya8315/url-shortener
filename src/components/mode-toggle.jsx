import { Moon, Sun } from "lucide-react"


import { useTheme } from "@/components/theme-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"

export function ModeToggle() {
  const {theme, setTheme } = useTheme()
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <Button
      className="px-3 py-2 rounded-full"
      onClick={toggleTheme}
    >
       {theme === 'light' ? 
          <Moon className="h-[1.2rem] w-[1.2rem] text-white " />
        : 
          <Sun className="h-[1.2rem] w-[1.2rem] text-black" />
          }
    </Button>
  )
}
