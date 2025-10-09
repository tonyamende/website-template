// src/App.tsx
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-lg font-bold">MyApp</div>
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="hover:underline">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className="hover:underline">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className="hover:underline">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button>Sign In</Button>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold">Welcome to MyApp</h1>
        <p className="mt-4 text-muted-foreground">
          This is a basic example using ShadCN components.
        </p>
      </main>
    </div>
  );
}

export default App;

