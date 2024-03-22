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

export default function TodoTable({ collection, backToView }: any) {
  const [collectionInfo, setCollectionInfo] = useState({
    id: "",
    title: "",
    init: null,
    end: null,
    products: [],
  });

  const [allProducts, setAllProducts] = useState([] as any);
  const [selectedProducts, setSelectedProducts] = useState([] as any);

  const fetchData = async () => {
    try {
      const allProducts = await productsRequest.getAllProducts();
      console.log("dasdasd");
      console.log(allProducts);

      setAllProducts(allProducts);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getError = () => {
    // if (name?.length > 40) {
    //   return "Content is too long";
    // }

    return null;
  };

  useEffect(() => {
    if (collection) {
      setCollectionInfo({
        id: collection.id,
        title: collection.attributes.title,
        init: collection.attributes.init,
        end: collection.attributes.end,
        products: collection.attributes.products || [],
      });
    }
  }, [collection]);

  console.log({ collectionInfo });

  const handleInputChange = (e: any, key: any) => {
    setCollectionInfo({
      ...collectionInfo,
      [key]: e.target.value,
    });
  };

  useEffect(() => {
    // Adiciona automaticamente produtos marcados ao selectedProducts
    const markedProducts = collectionInfo.products.filter((product: any) =>
      allProducts.some((p: any) => p.id === product.id)
    );
    setSelectedProducts(markedProducts);
  }, [collectionInfo.products, allProducts]);

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const updatedProducts = allProducts.filter((product: any) =>
      selectedProducts.some(
        (selectedProduct: any) => selectedProduct.id === product.id
      )
    );

    const dataToSend = {
      data: {
        title: collectionInfo.title,
        init: collectionInfo.init,
        end: collectionInfo.end,
        products: updatedProducts.map((product: any) => ({ ...product })),
      },
    };

    console.log(dataToSend);

    try {
      await axios.put(`/api/collections/${collectionInfo?.id}`, dataToSend);
      console.log("dasdasd");
    } catch (e) {
      console.log("error", e);
    }
  };

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
            collectionId:
          </Typography>
          <Typography variant="sigma" textColor="neutral800">
            {collectionInfo.id}
          </Typography>
        </Flex>

        <Flex
          gap={"50px"}
          justifyContent="space-between"
          maxWidth="500px"
          marginTop="20px"
        >
          <Typography variant="delta" textColor="neutral800">
            title collection
          </Typography>
          <TextInput
            placeholder="name brand"
            aria-label="name"
            name="text"
            onChange={(e: any) => handleInputChange(e, "title")}
            value={collectionInfo.title}
          />
        </Flex>

        <Flex direction="column" alignItems="stretch" gap={11}>
          <DatePicker
            label="init"
            onChange={(date: any) => {
              console.log({ date });
              handleInputChange(
                { target: { value: formatarData(date) } },
                "init"
              );
            }}
            selectedDate={collectionInfo.init}
          />
        </Flex>

        <Flex
          direction="column"
          alignItems="stretch"
          gap={11}
          marginBottom="20px"
        >
          <DatePicker
            label="end"
            onChange={(date: any) =>
              handleInputChange(
                { target: { value: formatarData(date) } },
                "end"
              )
            }
            selectedDate={collectionInfo.end}
          />
        </Flex>

        <Table colCount={4} rowCount={10}>
          <Thead>
            <Tr>
              <Th></Th>
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
        <Flex
          alignItems="stretch"
          gap={11}
          marginBottom="20px"
        >
          <Button type="submit">Save Collection</Button>
          <Button onClick={backToView}>Back To View</Button>
        </Flex>
      </form>
    </Box>
  );
}
