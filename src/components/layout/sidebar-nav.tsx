
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen } from 'lucide-react'; // Removed Zap as it's not used for nav items
import { cn } from '@/lib/utils';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { AppLogoIcon } from '@/components/icons/app-logo-icon';
import { TextToSpeechButton } from '@/components/ui/text-to-speech-button';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home, titleEnglish: 'Dashboard', isNahuatl: false },
  { href: '/lectures', label: 'Tēmachtīlli', icon: BookOpen, titleEnglish: 'Lectures', isNahuatl: true },
  // Add more items as needed
];

export function SidebarNav() {
  const pathname = usePathname();
  const sidebarTitleNahuatl = "Tlahtolli";

  return (
    <nav className="flex flex-col h-full">
      <div className="flex items-center gap-2 p-4 border-b border-sidebar-border group-data-[collapsible=icon]:justify-center">
          <AppLogoIcon className="h-8 w-8 fill-primary" />
          <div className="font-headline text-lg font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden flex items-center">
            <span>{sidebarTitleNahuatl}</span>
            <TextToSpeechButton 
              textToSpeak={sidebarTitleNahuatl} 
              className="ml-1" 
              buttonSize="sm" 
              buttonVariant="ghost"
            />
          </div>
      </div>
      <SidebarMenu className="p-2">
        {navItems.map((item) => {
          const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);
          return (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  variant="default"
                  size="default"
                  isActive={isActive}
                  tooltip={item.titleEnglish}
                  className={cn(
                    isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                    'justify-start'
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span className="group-data-[collapsible=icon]:hidden flex-grow flex items-center justify-between">
                    {item.label}
                    {item.isNahuatl &&
                       <TextToSpeechButton 
                         textToSpeak={item.label} 
                         buttonVariant='ghost' 
                         buttonSize='sm'
                         className="text-sidebar-accent-foreground hover:text-sidebar-accent-foreground/80 p-1 h-auto" 
                       />
                    }
                  </span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
      <div className="mt-auto p-4 border-t border-sidebar-border group-data-[collapsible=icon]:hidden">
        <p className="text-xs text-sidebar-foreground/70">© 2024 Tlahtolli Yeknemiliztli</p>
      </div>
    </nav>
  );
}
