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

export default function TodoTable({
  collectionsData,
  collectionView,
  collectionDelete,
  setShowUpdateModal,
  collectionCreate,
}: any) {
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
        footer={<TFooter onClick={collectionCreate}>Add a product</TFooter>}
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">Title</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Init</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">End</Typography>
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
          {collectionsData?.map((collection: any) => {
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
                  <Flex>
                    <Button
                      onClick={() => {
                        setShowUpdateModal(true);
                        collectionView(collection?.id);
                      }}
                    >
                      View
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        setShowUpdateModal(true);
                        collectionDelete(collection?.id);
                      }}
                    >
                      Delete
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
