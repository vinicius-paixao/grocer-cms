import { useState } from "react";
import {
  Button,
  Flex,
  TextInput,
  Loader,
  Typography,
  Box,
} from "@strapi/design-system";
import { loginRequest } from "../../api/login";

export default function Login() {
  const [login, setLogin] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({} as any);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);

    const body = { ...login };

    try {
      const login = await loginRequest.login(body);
      localStorage.setItem("token", login?.token);
      setIsLoading(false);
      window.location.reload();
    } catch (e: any) {
      setIsLoading(false);
      console.error("error", e.response.payload);
      setError(e.response.payload);
    }
  };

  console.log(error)

  return (
    <Box maxHeight="300px">
      <Flex maxWidth="1000px" marginTop="20px" justifyContent="center">
        <TextInput
          placeholder="login"
          label="Login"
          name="text"
          onChange={(e: any) => setLogin({ ...login, login: e.target.value })}
          value={login.login}
        />
      </Flex>

      <Flex
        maxWidth="1000px"
        marginTop="20px"
        justifyContent="center"
        direction="column"
      >
        <TextInput
          placeholder="password"
          label="password"
          name="text"
          type="password"
          onChange={(e: any) =>
            setLogin({ ...login, password: e.target.value })
          }
          value={login.password}
        />

        <Flex
          maxWidth="1000px"
          marginTop="20px"
          justifyContent="center"
          direction="column"
        >
          {error && (
            <Typography textColor="danger600" lineHeight="20px" fontSize="10px">
              {error?.detail || error?.error?.message}
            </Typography>
          )}
        </Flex>

        <Flex
          maxWidth="1000px"
          marginTop="20px"
          justifyContent="center"
          direction="column"
        >
          {isLoading ? (
            <Loader small />
          ) : (
            <Button onClick={handleSubmit} varinat="tertiary">
              Login
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
