import React, { useState } from "react";

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
// import { productsRequest } from "../../api/products";

export default function TodoTable({
  collectionsData,
  // collectionEdit,
  collectionView,
  collectionDelete,
  setShowModal,
  setShowUpdateModal,
  collectionCreate,
}: any) {
  const handleSubmit = async (productId: string) => {
    // try {
    //   const deletePrdict = await productsRequest.deleteProduct(productId);
    //   console.log("post");
    //   console.log(deletePrdict);
    //   // setShowModal(false);
    // } catch (e) {
    //   console.log("error", e);
    // }
  };

  console.log({ collectionsData });

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
            {/* <Th>
              <Typography variant="sigma">Imagem</Typography>
            </Th> */}

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
                    {/* <Button
                      onClick={() => {
                        setShowUpdateModal(true);
                        collectionEdit(collection?.id);
                      }}
                    >
                      Edit
                    </Button> */}
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
