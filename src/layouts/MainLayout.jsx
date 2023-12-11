import React from "react";
import { Outlet, Link } from "react-router-dom";

export const MainLayout = () => {
    const Routes = [
        {
            title: "Home",
            href: "home",
        },
        {
            title: "Contact",
            href: "contact",
        },
        {
            title: "Service",
            href: "service",
        },
    ];
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("password");
        window.location.pathname = '/login'
    };
    return (
        <div className="grid grid-cols-[250px_1fr] h-full max-h-[100%]">
            <div className="flex flex-col justify-between py-3 items-center gap-3 border">
                <div className="flex flex-col justify-center items-center gap-3">
                    {Routes.map((data) => (
                        <Link key={data.title} to={data.href}>
                            {data.title}
                        </Link>
                    ))}
                </div>
                <div onClick={handleLogout}>Logout</div>
            </div>
            <div className="bg-white text-black">
                <div className="border b-1 py-4 text-center">
                    Navbar</div>
                <Outlet />
            </div>
        </div>
    );
};
export default MainLayout;
