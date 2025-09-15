"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Smile } from "lucide-react"
import { useTheme } from "next-themes"
import EmojiPicker, { Theme } from 'emoji-picker-react';

interface EmojiPickerProps {
   onChange: (value: string) => void;
}

export const EmojiPickerButton = ({ onChange }: EmojiPickerProps) => {
   const { theme } = useTheme();

   return (
      <Popover>
         <PopoverTrigger>
            <Smile className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition" />
         </PopoverTrigger>
         <PopoverContent
            side="right"
            sideOffset={40}
            className="bg-transparent border-none shadow-none drop-shadow-none mb-16"
         >
            <EmojiPicker
               onEmojiClick={(emoji: { emoji: string }) => onChange(emoji.emoji)}
               theme={theme as Theme}
            />
         </PopoverContent>
      </Popover>
   )
}