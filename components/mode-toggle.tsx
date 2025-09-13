"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
   const { setTheme, theme } = useTheme()
   const [mounted, setMounted] = React.useState(false)

   React.useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) {
      return (
         <Button className="bg-transparent dark:bg-transparent border-0" variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle theme</span>
         </Button>
      )
   }

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button className="bg-transparent dark:bg-transparent border-0" variant="outline" size="icon">
               {theme === "dark" ? (
                  <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
               ) : (
                  <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
               )}
               <span className="sr-only">Toggle theme</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
               Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
               Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
               System
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
