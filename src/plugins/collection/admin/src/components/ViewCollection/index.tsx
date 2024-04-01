import {
  Box,
  Button,
  Typography,
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

interface ICollectionViewTable {
  collection: ICollection;
  collectionEdit: () => void;
  backToCollection: () => void;
}

export default function CollectionViewTable({
  collection,
  collectionEdit,
  backToCollection,
}: ICollectionViewTable) {
  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          Id da coleção:
        </Typography>
        <Typography variant="sigma" textColor="neutral800">
          {collection?.id}
        </Typography>
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          inicio:
        </Typography>
        <Typography variant="sigma" textColor="neutral800">
          {collection?.attributes?.init}
        </Typography>
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginBottom="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          final:
        </Typography>
        <Typography variant="sigma" textColor="neutral800">
          {collection?.attributes?.end}
        </Typography>
      </Flex>

      <Table
        colCount={4}
        rowCount={10}
        footer={<TFooter onClick={collectionEdit}>Editar Coleção</TFooter>}
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">nome da coleção</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">id</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">ativo</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">categoria</Typography>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {collection?.attributes?.products?.map((collection: any) => {
            return (
              <Tr key={collection?.id}>
                <Td>
                  <Typography textColor="neutral800">
                    {collection?.name}
                  </Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">
                    {collection?.id}
                  </Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">
                    {collection?.active ? "True" : "False"}
                  </Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">
                    {collection?.category}
                  </Typography>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <Flex alignItems="stretch" gap={11} marginBottom="20px">
        <Button onClick={backToCollection}>Voltar para visualização</Button>
      </Flex>
    </Box>
  );
}
