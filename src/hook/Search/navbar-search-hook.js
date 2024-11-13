import { useState } from "react";

const NavbarSearchHook = () => {
  const [searchWord, setSearchWord] = useState("");
  const OnChangeSearch = (e) => {
    console.log(e.target.value);
    setSearchWord(e.target.value);
  };
  return [OnChangeSearch, searchWord];
};

export default NavbarSearchHook;
