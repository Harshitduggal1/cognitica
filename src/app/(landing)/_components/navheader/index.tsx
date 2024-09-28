import { Button } from "@/components/ui/button"
/* eslint-disable react/no-children-prop */
import GlassSheet from "@/components/global/glass-sheet"
import Link from "next/link"
import { Logout } from "@/icons"
import { MenuIcon } from "lucide-react"

type Props = {}

const LandingPageNavbar = (props: Props) => {
  return (
    <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
      <p className="font-bold text-2xl">COGNITICA✨</p>
      
      <div className="flex gap-2">
        <Link href="/sign-in">
          <Button
            variant="outline"
            className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
          >
            <Logout />
            Login
          </Button>
        </Link>
        <GlassSheet
                  triggerClass="lg:hidden"
                  trigger={<Button variant="ghost" className="hover:bg-transparent">
                      <MenuIcon size={30} />
                  </Button>} children={undefined}        >
         
        </GlassSheet>
      </div>
    </div>
  )
}

export default LandingPageNavbar