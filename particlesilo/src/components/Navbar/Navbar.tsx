import Button from "../Button"
import NavbarItem from "./NavbarItem"

enum NavbarItemType { 
    text = "TEXT", 
    fillButton = "FILLBUTTON", 
    borderButton = "BORDERBUTTON"
}

export default function Navbar(){
    const items = [
        {
            title: "Resources", 
            route: "/resources", 
            type: NavbarItemType.text
        }, 
        {
            title: "Upload", 
            route: "/upload",
            type: NavbarItemType.text
        }, 
        {
            title: "Login", 
            route: "/login", 
            type: NavbarItemType.borderButton
        }, 
        { 
            title: "Sign Up", 
            route: "/signup", 
            type: NavbarItemType.fillButton
        }
    ]
    return <div className="min-w-screen h-24 flex space-x-8 justify-end ">
        {
            items?.map(item => item.type === "TEXT" ? <NavbarItem title={item.title} route={item.route} key={item.title} /> : <Button title={item.title} link={item.route} fill={item.type === "FILLBUTTON"} key={item.title} />)
        }
    </div>
}
