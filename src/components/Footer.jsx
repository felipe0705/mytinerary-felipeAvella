import { SlSocialInstagram, SlSocialFacebook,  SlSocialTwitter } from "react-icons/sl";
import { NavLink } from "react-router-dom";

export default function Footer() {

  
  const routes = [
    { to: "/", text: "Home" },
    { to: "/cities", text: "Cities" },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-8 px-4 bg-black justify-between w-full hover:[&amp;_a]:underline [&amp;_a]:underline-offset-8 [&amp;_a]:decoration-4">
        <div className="grid gap-2">
        {routes.map((route, index) => (
          <NavLink
            key={index}
            to={route.to}
            className={({ isActive }) => 
                `text-xl font-bold text-white hover:text-blue-400 ${isActive ? "underline" : ""}`}>
            {route.text}
          </NavLink>
        ))}
        </div>
        <div className="space-y-2 text-white">
          <p className="text-xl font-bold">Contact Us</p>
          <p>Colombia, City</p>
          <p>Email: Piña@mytinerary.com</p>
          <p>Phone: (320) 000-0090</p>
        </div>
        <div className="space-y-2 grid text-white">
          <p className="text-xl font-bold">Follow Us</p>

          <i className="flex  m-auto pr-2 "> 
          <SlSocialFacebook className="text-2xl mr-2" />
             Facebook
          </i>

          <i className="flex  m-auto pr-2 ">
          <SlSocialInstagram className="text-2xl mr-2"/>
             Instagram
          </i>

          <i
            className="flex m-auto  pr-2" >
            <SlSocialTwitter className="text-2xl mr-2" />
             Twitter
          </i>
        </div>
      </div>
    </>
  );
}
