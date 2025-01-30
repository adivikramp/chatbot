"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaGithub } from "react-icons/fa";

import { IconType } from "react-icons";

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav";
import { communityTabData } from "@/data/communityTabData";
import { useMediaQuery } from "@/hooks/use-media-query";

export function Navbar() {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <>
            {isDesktop ? (
                <NavigationMenu className="w-4/5 mx-auto pt-2">
                    {/* Left Side */}
                    <NavigationMenuList>
                        <NavigationMenuItem className="my-4 mr-16">
                            <Link href="/" legacyBehavior passHref>
                                <Image src="/images/logo.svg" width={72} height={72} alt="Logo" />
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/pricing" legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:text-blue-600`}>
                                    Pricing
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* Resources Tab */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid p-4 md:w-[300px] md:grid-cols-1">
                                    <ListItem href="/blog" title="Blogs" className="text-gray-500 gap-2">
                                        Read our latest insights
                                    </ListItem>
                                    <ListItem href="/docs" title="Docs" className="text-gray-500">
                                        Explore our tutorials
                                    </ListItem>
                                    <ListItem href="/changelog" title="Changelog" className="text-gray-500">
                                        See whats new
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Community Tab */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1">
                                    {communityTabData.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                            icon={component.icon}
                                        >
                                            <p className="text-gray-500">{component.description}</p>
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/download" legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:text-blue-600`}>
                                    Download
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    {/* Right Side */}
                    <NavigationMenuList>
                        <NavigationMenuItem className="my-2">
                            <Link href="https://github.com/hcengineering/platform" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <FaGithub className="w-6 h-6 mx-2" />
                                    Star Us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="outline" size="sm">
                                <Link href="/login" legacyBehavior passHref>
                                    SIGN IN
                                </Link>
                            </Button>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Button variant="outline" size="sm">
                                <Link href="/signup" legacyBehavior passHref>
                                    GET STARTED
                                </Link>
                            </Button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            ) : (
                <MobileNav />
            )}
        </>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon?: IconType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800",
                        className
                    )}
                    {...props}
                >
                    {Icon && (
                        <div className="flex items-center space-x-2 rounded-xl border border-gray-600 bg-gray-900">
                            <Icon className="w-5 h-5 m-2 text-white" />
                        </div>
                    )}
                    <div className="flex flex-col mx-3">
                        <span className="text-md text-white leading-none mb-1">{title}</span>
                        {children}
                    </div>
                </a>
            </NavigationMenuLink>
        </li >
    )
})

ListItem.displayName = "ListItem"
