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
  Loader,
  Layout,
  BaseHeaderLayout,
} from "@strapi/design-system";
import { loginRequest } from "../../api/login";
import { brandsRequest } from "../../../../../brands/admin/src/api/brands";
import { categoriesRequest } from "../../../../../categories/admin/src/api/categories";

export default function TodoTable({ backToProduct }: any) {
  const [login, setLogin] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  console.log({ token });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);

    const body = { ...login };

    console.log({ body });

    try {
      const login = await loginRequest.login(body);
      console.log("post");
      console.log(login);
      localStorage.setItem("token", login?.token);
      setIsLoading(false);
      window.location.reload();
    } catch (e) {
      setIsLoading(false);
      console.log("error", e);
    }
  };

  const getError = () => {
    // if (name?.length > 40) {
    //   return "Content is too long";
    // }

    return null;
  };

  return (
    <Layout>
      <BaseHeaderLayout title="Login" subtitle="" as="h2" />
      {token ? (
        <Typography variant="delta" textColor="neutral800">
          Logged
        </Typography>
      ) : (
        <Box
          background="neutral0"
          hasRadius={true}
          shadow="filterShadow"
          padding={8}
          style={{ marginTop: "10px" }}
        >
          <Flex maxWidth="1000px" marginTop="20px" justifyContent="center">
            <TextInput
              placeholder="login"
              label="Login"
              name="text"
              hint="Max 40 characters"
              error={getError()}
              onChange={(e: any) =>
                setLogin({ ...login, login: e.target.value })
              }
              value={login.login}
            />
          </Flex>

          <Flex maxWidth="1000px" marginTop="20px" justifyContent="center" direction="column">
            <TextInput
              placeholder="password"
              label="password"
              name="text"
              hint="Max 40 characters"
              error={getError()}
              onChange={(e: any) =>
                setLogin({ ...login, password: e.target.value })
              }
              value={login.password}
            />
            <Button onClick={handleSubmit} varinat="tertiary">
              {isLoading ? <Loader small /> : "Login"}
            </Button>
          </Flex>
        </Box>
      )}
    </Layout>
  );
}
