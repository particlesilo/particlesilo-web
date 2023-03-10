import { useSession } from "next-auth/react";
import Button from "../Button"
import NavbarItem from "./NavbarItem"

enum NavbarItemType { 
    text = "TEXT", 
    fillButton = "FILLBUTTON", 
    borderButton = "BORDERBUTTON"
}

export default function Navbar(){

    const { data: session, status } = useSession();
   
    const items = [
        {
            title: "Resources", 
            route: "/resources", 
            type: NavbarItemType.text, 
            hide: !session
        }, 
        {
            title: "Upload", 
            route: "/upload",
            type: NavbarItemType.text, 
            hide: !session
        }, 
        {
            title: "Sign In", 
            route: "/api/auth/signin", 
            type: NavbarItemType.borderButton, 
            hide: !!session
        }, 
        { 
            title: "Sign Up", 
            route: "/api/auth/signup", 
            type: NavbarItemType.fillButton, 
            hide: !!session
        }
    ]

    return <div className="min-w-screen h-24 flex space-x-8 justify-end ">
        {
            items?.filter(i => !i.hide).map(item => 
                item.type === "TEXT" ? <NavbarItem title={item.title} route={item.route} key={item.title} /> : <Button title={item.title} link={item.route} fill={item.type === "FILLBUTTON"} key={item.title} />)
        }
    </div>
}
