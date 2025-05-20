import {
  BookCheck,
  ChevronDown,
  CircleDollarSign,
  CircleHelp,
  Link,
  Link2,
  Newspaper,
  ToyBrick,
  UserCheck,
  UserPen,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const items = [
  {
    title: "Auto Blog",
    url: "#",
    icon: BookCheck,
  },
  {
    title: "Internal Links",
    url: "#",
    icon: Link2,
  },
  {
    title: "Free Backlinks",
    url: "#",
    icon: Link,
  },
  {
    title: "Integrations",
    url: "#",
    icon: ToyBrick,
  },
  {
    title: "Subscription",
    url: "#",
    icon: UserCheck,
  },
  {
    title: "Affiliate Program",
    url: "#",
    icon: CircleDollarSign,
  },
  {
    title: "Help Center",
    url: "#",
    icon: CircleHelp,
  },
];

const subMenus = [
  {
    title: "Create Article",
    url: "#",
  },
  {
    title: "Generated Articles",
    url: "#",
  },
  {
    title: "Keyword Projects",
    url: "#",
  },
  {
    title: "AI Keyword to Article",
    url: "#",
  },
  {
    title: "Steal Competitor Keyword",
    url: "#",
  },
  {
    title: "Import Keyword from GSC",
    url: "#",
  },
  {
    title: "Manual Keyword to Article",
    url: "#",
  },
  {
    title: "Bulk Keyword to Article",
    url: "#",
  },
  {
    title: "Longtail Keyword to Article",
    url: "#",
  },
  {
    title: "Article Settings",
    url: "#",
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/" className="flex justify-center items-center w-full">
                <span className="text-3xl font-black">abun</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex items-center border border-neutral-300 rounded-full w-[200px] mx-auto my-4 py-4">
                  <Avatar className="size-[25px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="font-semibold">amazon.com</p>
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-white p-2 rounded-md"
                align="end"
                sideOffset={10}
              >
                <DropdownMenuItem className="cursor-pointer hover:bg-neutral-50">
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-neutral-50">
                  Setting
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-neutral-50">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <a href="#" className="flex gap-3 items-center">
                        <div className="flex gap-2 items-center">
                          <Newspaper className="text-blue-600 size-4" />
                          <span>Articles</span>
                        </div>
                        <ChevronDown className="size-4" />
                      </a>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {subMenus.map((subMenu) => (
                        <SidebarMenuSubItem key={subMenu.title}>
                          <SidebarMenuButton asChild>
                            <a href={subMenu.url}>
                              <span>{subMenu.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="text-blue-600" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarSeparator />
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <UserPen className="text-blue-600" />
                    <span>Profile</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
