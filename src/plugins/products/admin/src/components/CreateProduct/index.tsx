import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  TextInput,
  SimpleMenu,
  MenuItem,
  Typography,
  ToggleInput,
} from "@strapi/design-system";
import { productsRequest } from "../../api/products";
import { brandsRequest } from "../../../../../brands/admin/src/api/brands";
import { categoriesRequest } from "../../../../../categories/admin/src/api/categories";

export default function TodoTable({ backToProduct }: any) {
  const [createProduct, setCreateProduct] = useState({} as any);
  const [allBrands, setAllBrands] = useState([]);
  const [allCategoryes, setAllCategoryes] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const body = { ...createProduct };

    try {
      const createProduct = await productsRequest.setProduct(body);
      console.log("post");
      console.log(createProduct);
      // setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const fetchData = async () => {
    try {
      const allbrands = await brandsRequest.getAllBrands();
      console.log("dasdasd");
      console.log(allBrands);

      setAllBrands(allbrands);
    } catch (e) {
      console.log("error", e);
    }
  };

  const fetchCategoryes = async () => {
    try {
      const allCategoryes = await categoriesRequest.getAllCategories();
      console.log("dasdasd");
      console.log(allCategoryes);

      setAllCategoryes(allCategoryes);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCategoryes();
  }, []);

  const getError = () => {
    // if (name?.length > 40) {
    //   return "Content is too long";
    // }

    return null;
  };

  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="name brand"
          label="Name"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, name: e.target.value })
          }
          value={createProduct.name}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="similarTerms"
          label="similarTerms"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, similarTerms: e.target.value })
          }
          value={createProduct.similarTerms}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="slug"
          label="slug"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, slug: e.target.value })
          }
          value={createProduct.slug}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="title"
          label="title"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, title: e.target.value })
          }
          value={createProduct.title}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="shortDescription"
          label="shortDescription"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({
              ...createProduct,
              shortDescription: e.target.value,
            })
          }
          value={createProduct.shortDescription}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="longDescription"
          label="longDescription"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({
              ...createProduct,
              longDescription: e.target.value,
            })
          }
          value={createProduct.longDescription}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <Typography variant="delta" textColor="neutral800">
          brandId:
        </Typography>

        <SimpleMenu id="label" label={createProduct?.brandId}>
          {allBrands?.map((brand: any) => (
            <MenuItem
              key={brand}
              id="menuItem-January"
              onClick={() =>
                setCreateProduct({ ...createProduct, brandId: brand.id })
              }
            >
              {brand.id}
            </MenuItem>
          ))}
        </SimpleMenu>
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        {/* <TextInput
          placeholder="categoryId"
          label="categoryId"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, categoryId: e.target.value })
          }
          value={createProduct.categoryId}
        /> */}

        <Typography variant="delta" textColor="neutral800">
          categoryId:
        </Typography>

        <SimpleMenu id="label" label={createProduct?.categoryId}>
          {allCategoryes?.map((categorye: any) => (
            <MenuItem
              key={categorye}
              id="menuItem-January"
              onClick={() =>
                setCreateProduct({
                  ...createProduct,
                  categoryId: categorye.id,
                  commercialPoliticId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                })
              }
            >
              {categorye.id}
            </MenuItem>
          ))}
        </SimpleMenu>
      </Flex>

      {/* <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="commercialPoliticId"
          label="commercialPoliticId"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({
              ...createProduct,
              commercialPoliticId: e.target.value,
            })
          }
          value={createProduct.commercialPoliticId}
        />
      </Flex> */}

      <Flex maxWidth="1000px" marginTop="20px">
      <Typography variant="delta" textColor="neutral800">
          displayInSite
        </Typography>
        <ToggleInput
          aria-label="Enabled"
          onLabel="True"
          offLabel="False"
          checked={createProduct.displayInSoldOut}
          onChange={(e: any) =>
            setCreateProduct({
              ...createProduct,
              displayInSoldOut: e.target.checked,
            })
          }
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <Typography variant="delta" textColor="neutral800">
          displayInSite
        </Typography>
        <ToggleInput
          aria-label="Enabled"
          onLabel="True"
          offLabel="False"
          checked={createProduct.displayInSite}
          onChange={(e: any) =>
            setCreateProduct({
              ...createProduct,
              displayInSite: e.target.checked,
            })
          }
        />
      </Flex>

      <Flex maxWidth="100%" marginTop="20px">
        <TextInput
          placeholder="fiscalCode"
          label="fiscalCode"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, fiscalCode: e.target.value })
          }
          value={createProduct.fiscalCode}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="punctuation"
          label="punctuation"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, punctuation: e.target.value })
          }
          value={createProduct.punctuation}
        />
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Button onClick={handleSubmit}>send</Button>
        <Button variant={"tertiary"} onClick={backToProduct}>
          back
        </Button>
      </Flex>
    </Box>
  );
}
