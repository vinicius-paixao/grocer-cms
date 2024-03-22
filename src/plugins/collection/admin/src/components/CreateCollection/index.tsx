import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Typography,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Flex,
  TextInput,
  DatePicker,
} from "@strapi/design-system";
import { productsRequest } from "../../../../../products/admin/src/api/products";
import axios from "axios";

export default function TodoTable({ backToCollection }: any) {
  const [collectionInfo, setCollectionInfo] = useState({
    title: "",
    init: "",
    end: "",
    products: [] as any,
  });

  const [allProducts, setAllProducts] = useState([] as any);
  const [selectedProducts, setSelectedProducts] = useState([] as any);

  const fetchData = async () => {
    try {
      const allProducts = await productsRequest.getAllProducts();
      setAllProducts(allProducts);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckboxChange = (product: any, isChecked: any) => {
    if (isChecked) {
      setSelectedProducts((prevSelectedProducts: any) => [
        ...prevSelectedProducts,
        product,
      ]);
    } else {
      setSelectedProducts((prevSelectedProducts: any) =>
        prevSelectedProducts.filter(
          (selectedProduct: any) => selectedProduct.id !== product.id
        )
      );
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const dataToSend = {
      data: {
        title: collectionInfo.title,
        init: collectionInfo.init,
        end: collectionInfo.end,
        products: selectedProducts.map((product: any) => ({ ...product })),
      },
    };

    console.log({ dataToSend });

    try {
      await axios.post(`/api/collections`, dataToSend);
      console.log("Collection created successfully!");
      // Limpar os campos após a submissão bem-sucedida
      setCollectionInfo({
        title: "",
        init: "",
        end: "",
        products: [],
      });
      setSelectedProducts([]);
    } catch (e) {
      console.log("error", e);
    }
  };

  function formatarData(data: any) {
    // Cria um objeto Date com a data fornecida
    const dateObj = new Date(data);

    // Extrai o dia, mês e ano do objeto Date
    const dia = String(dateObj.getDate()).padStart(2, "0");
    const mes = String(dateObj.getMonth() + 1).padStart(2, "0"); // O mês é baseado em zero
    const ano = dateObj.getFullYear();

    // Retorna a data formatada no formato "MM/DD/YYYY"
    return `${mes}/${dia}/${ano}`;
  }

  console.log({ collectionInfo });

  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <form onSubmit={handleSubmit}>
        <Flex
          gap={"50px"}
          justifyContent="space-between"
          maxWidth="500px"
          marginTop="20px"
        >
          <Typography variant="delta" textColor="neutral800">
            Title collection
          </Typography>
          <TextInput
            placeholder="Collection title"
            aria-label="title"
            name="text"
            onChange={(e: any) =>
              setCollectionInfo({ ...collectionInfo, title: e.target.value })
            }
            value={collectionInfo.title}
          />
        </Flex>

        <Flex direction="column" alignItems="stretch" gap={11}>
          <DatePicker
            label="Init"
            onChange={(date: any) =>
              setCollectionInfo({ ...collectionInfo, init: date })
            }
            selectedDate={collectionInfo.init}
          />
        </Flex>

        <Flex direction="column" alignItems="stretch" gap={11}>
          <DatePicker
            label="End"
            onChange={(date: any) =>
              setCollectionInfo({ ...collectionInfo, end: date })
            }
            selectedDate={collectionInfo.end}
          />
        </Flex>

        <Table colCount={4} rowCount={10}>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>
                <Typography variant="sigma">Name</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">ID</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Active</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">Category</Typography>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {allProducts.map((product: any) => {
              const isChecked = selectedProducts.some(
                (p: any) => p.id === product.id
              );

              return (
                <Tr key={product.id}>
                  <Td>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) =>
                        handleCheckboxChange(product, e.target.checked)
                      }
                    />
                  </Td>
                  <Td>{product?.name}</Td>
                  <Td>{product?.id}</Td>
                  <Td>{product?.active ? "True" : "False"}</Td>
                  <Td>{product?.category}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Flex alignItems="stretch" gap={11} marginBottom="20px">
          <Button type="submit">Create Collection</Button>
          <Button onClick={backToCollection}>Back To View</Button>
        </Flex>
      </form>
    </Box>
  );
}
