import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { UserContext } from "@/app/providers";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export default function Title() {
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  const logout = () => {
    deleteCookie("access-token");
    if (setUser !== undefined) {
      setUser(null);
    }
    router.push("/")
  }
  return (
    <Navbar className="border-b-1 ">
      <NavbarBrand>
        <p className="font-bold text-inherit">switter</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} onClick={() => logout()} color="primary" variant="flat">
            Log out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
