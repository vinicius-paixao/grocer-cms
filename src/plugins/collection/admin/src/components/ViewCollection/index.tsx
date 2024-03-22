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
  collection,
  collectionEdit,
  backToCollection,
  collectionView,
  collectionDelete,
  setShowModal,
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
      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          CollectionId:
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
          init:
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
          end:
        </Typography>
        <Typography variant="sigma" textColor="neutral800">
          {collection?.attributes?.end}
        </Typography>
      </Flex>

      <Table
        colCount={4}
        rowCount={10}
        footer={<TFooter onClick={collectionEdit}>Edit Collection</TFooter>}
      >
        <Thead>
          <Tr>
            {/* <Th>
              <Typography variant="sigma">Imagem</Typography>
            </Th> */}

            <Th>
              <Typography variant="sigma">name</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">id</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">active</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">category</Typography>
            </Th>
{/*
            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th> */}
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

      <Flex
          alignItems="stretch"
          gap={11}
          marginBottom="20px"
        >
          <Button onClick={backToCollection}>Back To View</Button>
        </Flex>
    </Box>
  );
}
