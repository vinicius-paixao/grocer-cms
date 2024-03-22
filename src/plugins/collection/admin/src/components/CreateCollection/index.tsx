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
    banner: null,
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
        banner: collectionInfo.banner,
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
        banner: null,
      });
      setSelectedProducts([]);
    } catch (e) {
      console.log("error", e);
    }
  };

  async function setImage(e: any) {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("files", file);

    try {
      const response = await axios.post("/api/upload", formData);
      const data = response.data;
      setCollectionInfo({ ...collectionInfo, banner: data });
      console.log({ data });
    } catch (error) {
      console.error(error);
    }
  }

  const handleFileButtonClick = (): void => {
    const fileInput = document.getElementById(`fileInput`) as HTMLInputElement;

    fileInput.click();
  };

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
          Banner Collection
        </Typography>
        <div className="">
          <input
            type="file"
            id={`fileInput`}
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              setImage(e);
            }}
          />
          <div>
            <button className="" onClick={handleFileButtonClick}>
              <img src="./cms/icon_image.svg" alt="" />
              <p>Adicione fotos ao seu projeto</p>
            </button>
          </div>
        </div>
      </Flex>
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
