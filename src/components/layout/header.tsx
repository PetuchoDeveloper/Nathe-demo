import Link from 'next/link';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { AppLogoIcon } from '@/components/icons/app-logo-icon';
import { UserAvatar } from './user-avatar';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur md:px-6">
      <div className="md:hidden">
        <SidebarTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Toggle sidebar">
            <AppLogoIcon className="h-6 w-6 fill-primary" />
          </Button>
        </SidebarTrigger>
      </div>
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <AppLogoIcon className="hidden h-6 w-6 fill-primary md:block" />
        <h1 className="font-headline text-xl font-semibold text-foreground">
          Tlahtolli Yeknemiliztli
        </h1>
      </Link>
      <div className="ml-auto flex items-center gap-4">
        <UserAvatar />
      </div>
    </header>
  );
}
