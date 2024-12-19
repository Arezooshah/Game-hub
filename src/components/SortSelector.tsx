import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>rr</MenuItem>
        <MenuItem>fdf</MenuItem>
        <MenuItem>hgj</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
