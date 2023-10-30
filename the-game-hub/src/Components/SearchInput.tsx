import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface props {
  onSearch: (searchItem: string) => void;
}

const SearchInput = ({ onSearch }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(inputRef.current?.value || "");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          height={"41px"}
          borderRadius={12}
          placeholder="Search Games..."
          variant={"filled"}
          ref={inputRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
