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
} from "@strapi/design-system";
import Pencil from "@strapi/icons";
import Trash from "@strapi/icons";
import Plus from "@strapi/icons/Plus";
import { categoriesRequest } from "../../api/categories";

export default function TodoTable({
  todoData,
  toggleTodo,
  deleteTodo,
  editTodo,
  setShowModal,
  setShowUpdateModal,
  brandId,
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
          <TFooter onClick={() => setShowModal(true)}>Add a categories</TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Contract Account Id</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Name</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Title</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Description</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Parent Category Id</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Parent Category</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Similar Terms</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {todoData.map((todo: any) => {
            return (
              <Tr key={todo.id}>
                <Td>
                  <Typography textColor="neutral800">{todo.id}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{todo.contractAccountId}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{todo.name}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{todo.title}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {todo.description}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {todo.parentCategoryId}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {todo.parentCategory}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {todo.similarTerms}
                  </Typography>
                </Td>

                <Td>
                  <Button
                    onClick={() => {
                      setShowUpdateModal(true);
                      brandId(todo.id);
                    }}
                  >
                    Edit
                  </Button>
                </Td>

                <Td>
                  <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
