// import {
//   Button,
//   HStack,
//   Image,
//   List,
//   ListItem,
//   Spinner,
// } from "@chakra-ui/react";

// import useGenres, { Genre } from "../Hooks/useGenres";
// import getCroppedImageUrl from "./Services/image-url";
// // import useGameQueryStore from "../store";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenre?: Genre | null;
// }
// const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
//   const { data, isLoading, error } = useGenres();

//   if (error) return null;

//   if (isLoading) return <Spinner />;

//   return (
//     <List>
//       {data.map((genre) => (
//         <ListItem key={genre.id} paddingY="5px">
//           <HStack>
//             <Image
//               boxSize="32px"
//               borderRadius={8}
//               src={getCroppedImageUrl(genre.image_background)}
//             />
//             <Button
//               whiteSpace="normal"
//               textAlign="left"
//               fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
//               onClick={() => onSelectGenre(genre)}
//               fontSize="md"
//               variant="link"
//             >
//               {genre.name}
//             </Button>
//           </HStack>
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default GenreList;

import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageUrl from "./Services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="md"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
