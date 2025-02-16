import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Search from "@/components/Search";
import FileUploader from "@/components/FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";

const Header = () => {
  return (
    <header>
      <Search />
      <div className="header-wrapper">
        <FileUploader />
        <form
          action={async () => {
            "use server";

            await signOutUser();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <LogOut className="w-6 text-xl" />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
