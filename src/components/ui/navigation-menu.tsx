"use client"

import * as React from "react"
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "relative z-10 inline-flex h-10 w-max items-center justify-center gap-1 rounded-lg px-3 py-2 text-base font-medium whitespace-nowrap transition-colors outline-none select-none hover:text-text-strong focus-visible:ring-2 focus-visible:ring-brand-green/40 disabled:pointer-events-none disabled:opacity-50 data-open:text-text-strong [&>svg]:pointer-events-none [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:transition-transform data-open:[&>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-px"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "w-screen data-[motion=from-end]:animate-in data-[motion=from-end]:slide-in-from-right-8 data-[motion=from-start]:animate-in data-[motion=from-start]:slide-in-from-left-8 data-[motion=to-end]:animate-out data-[motion=to-end]:slide-out-to-right-8 data-[motion=to-start]:animate-out data-[motion=to-start]:slide-out-to-left-8",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand-green/40",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-1 flex h-2 items-end justify-center overflow-hidden data-closed:animate-out data-closed:fade-out data-open:animate-in data-open:fade-in",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      data-slot="navigation-menu-viewport-wrapper"
      className="absolute left-1/2 top-full z-50 mt-3 flex w-screen -translate-x-1/2 justify-center overflow-visible"
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "relative h-(--radix-navigation-menu-viewport-height) w-screen overflow-hidden border-y border-black/10 bg-base-white text-popover-foreground shadow-[0_24px_70px_rgb(11_15_19_/_0.14)] transition-[height,opacity,transform] duration-300 data-closed:pointer-events-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      />
    </div>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
