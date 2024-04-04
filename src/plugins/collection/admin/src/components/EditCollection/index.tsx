import  { useEffect, useState } from "react";

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
    banner: [] as any,
  });

  const [allProducts, setAllProducts] = useState([] as any);
  const [selectedProducts, setSelectedProducts] = useState([] as any);

  const fetchData = async () => {
    try {
      const allProducts = await productsRequest.getAllProducts();

      setAllProducts(allProducts);
    } catch (e) {
      console.error("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (collection) {
      setCollectionInfo({
        id: collection.id,
        title: collection.attributes.title,
        init: collection.attributes.init,
        end: collection.attributes.end,
        products: collection.attributes.products || [],
        banner: collection?.attributes?.banner
          ? collection?.attributes?.banner[0]?.url
          : [],
      });
    }
  }, [collection]);

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
    const dateObj = new Date(data);

    const dia = String(dateObj.getDate()).padStart(2, "0");
    const mes = String(dateObj.getMonth() + 1).padStart(2, "0");
    const ano = dateObj.getFullYear();

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
        banner: collectionInfo.banner,
        products: updatedProducts.map((product: any) => ({ ...product })),
      },
    };

    try {
      await axios.put(`/api/collections/${collectionInfo?.id}`, dataToSend);
    } catch (e) {
      console.error("error", e);
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
      <Flex gap={"50px"} marginTop="20px" direction="column">
        <Typography variant="delta" textColor="neutral800">
          Banner Collection
        </Typography>
        {collectionInfo?.banner && (
          <img
            className=""
            src={`http://localhost:1337${collectionInfo?.banner}`}
            alt="Preview"
          />
        )}

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
          <button className="" onClick={handleFileButtonClick}>
            <img src="./cms/icon_image.svg" alt="" />
            <p>Adicione fotos ao seu projeto</p>
          </button>
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
        <Flex alignItems="stretch" gap={11} marginBottom="20px">
          <Button type="submit">Save Collection</Button>
          <Button onClick={backToView}>Back To View</Button>
        </Flex>
      </form>
    </Box>
  );
}
