"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  const handleCalendarChange = (_value, _e) => {
    const _event = {
      target: {
        value: String(_value),
      },
    };
    _e(_event);
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-3",
        caption: "flex justify-center pt-1 relative items-center gap-1",
        caption_label: "text-sm font-medium text-white",
        caption_dropdowns:
          "flex justify-center space-x-2 bg-zinc-800 text-white w-full px-8",
        nav: "flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-zinc-700 p-0 text-white hover:bg-zinc-600"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-white rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal text-white hover:bg-zinc-700"
        ),
        day_selected: "bg-yellow-500 text-black hover:bg-yellow-600",
        day_today: "bg-zinc-700 text-white",
        day_outside: "text-zinc-500 opacity-50",
        day_disabled: "text-zinc-500 opacity-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        Dropdown: ({ ...props }) => (
          <Select
            {...props}
            onValueChange={(value) => {
              if (props.onChange) {
                handleCalendarChange(value, props.onChange);
              }
            }}
            value={props.value}
          >
            <SelectTrigger className="h-8 w-[130px] border-zinc-700 bg-zinc-800 text-white">
              <SelectValue placeholder={props?.caption}>
                {props?.caption}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="max-h-[200px] overflow-y-auto bg-zinc-800 text-white">
              {props.children &&
                React.Children.map(props.children, (child) => (
                  <SelectItem
                    value={child?.props?.value}
                    className="hover:bg-zinc-700"
                  >
                    {child?.props?.children}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        ),
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
