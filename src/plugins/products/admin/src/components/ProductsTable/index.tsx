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
  Flex
} from "@strapi/design-system";
import { SimpleMenu, MenuItem } from "@strapi/design-system/v2";

export default function TodoTable({
  productsData,
  // toggleTodo,
  deleteTodo,
  productEdit,
  setShowModal,
  setShowUpdateModal,
  createProducts
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
        footer={
          <TFooter onClick={createProducts}>Add a product</TFooter>
        }
      >
        <Thead>
          <Tr>
            {/* <Th>
              <Typography variant="sigma">Imagem</Typography>
            </Th> */}

            <Th>
              <Typography variant="sigma">Name</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Brands</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Active</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Data de indexação</Typography>
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
          {productsData?.map((product: any) => {
            return (
              <Tr key={product?.name}>
                <Td>
                  <Typography textColor="neutral800">
                    {product?.name}
                  </Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">
                    {product?.brand?.name}
                  </Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">
                    {product?.active ? "true" : "false"}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {product?.updatedAt}
                  </Typography>
                </Td>

                <Td>
                <Flex>
                  <Button
                    onClick={() => {
                      setShowUpdateModal(true);
                      productEdit(product?.id);
                    }}
                  >
                    Edit
                  </Button>
                  <SimpleMenu label="">
                    {/* <MenuItem onSelect={() => console.log("opening")}>
                      Excluir
                    </MenuItem>
                    <MenuItem disabled onSelect={() => console.log("cloning")}>
                      Clone
                    </MenuItem>
                    <MenuItem onSelect={() => console.log("editing")}>
                      Edit
                    </MenuItem> */}
                    <MenuItem
                      color="danger600"
                      onSelect={() => console.log("delete")}
                    >
                      Delete
                    </MenuItem>
                  </SimpleMenu>
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
