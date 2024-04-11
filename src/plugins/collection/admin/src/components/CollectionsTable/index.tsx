import {
  Box,
  Button,
  Typography,
  VisuallyHidden,
  Table,
  Thead,
  TFooter,
  Tbody,
  Tr,
  Td,
  Th,
  Flex,
} from "@strapi/design-system";
import { ICollection } from "../../types/collection";

interface ICollectionTable {
  collectionsData: ICollection[];
  collectionView: (value: string) => void;
  collectionDelete: (value: string) => void;
  collectionCreate: () => void;
}

export default function CollectionsTable({
  collectionsData,
  collectionView,
  collectionDelete,
  collectionCreate,
}: ICollectionTable) {

  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Table
        colCount={4}
        rowCount={10}
        footer={<TFooter onClick={collectionCreate}>adicionar coleção</TFooter>}
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">Titulo</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Inicio</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">final</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Editar</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {collectionsData?.map((collection: ICollection) => {
            return (
              <Tr key={collection?.id}>
                <Td>
                  <Typography textColor="neutral800">
                    {collection?.attributes?.title}
                  </Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">
                    {collection?.attributes?.init}
                  </Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">
                    {collection?.attributes?.end}
                  </Typography>
                </Td>

                <Td>
                  <Flex gap="5px">
                    <Button
                      onClick={() => {
                        collectionView(collection?.id);
                      }}
                    >
                      Visualizar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        collectionDelete(collection?.id);
                      }}
                    >
                      Deletar
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
