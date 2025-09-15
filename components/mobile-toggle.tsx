import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import {
   Sheet,
   SheetContent,
   SheetTrigger,
   SheetTitle,
} from "./ui/sheet"
import ServerSidebar from "./server/server-sidebar"
import NavigationSidebar from "./navigation/navigation-sidebar"

export const MobileToggle = ({ serverId }: { serverId: string }) => {
   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button
               variant="ghost"
               size="icon"
               className="md:hidden"
            >
               <Menu />
            </Button>
         </SheetTrigger>
         <SheetContent side="left" className="p-0 flex flex-row gap-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="w-[72px]">
               <NavigationSidebar />
            </div>
            <div className="w-full">
               <ServerSidebar serverId={serverId} />
            </div>
         </SheetContent>
      </Sheet>
   )
}