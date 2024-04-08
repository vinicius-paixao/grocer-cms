import { useState } from "react";
import { Button, Flex, TextInput, Loader } from "@strapi/design-system";
import { loginRequest } from "../../api/login";

export default function Login() {
  const [login, setLogin] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);

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
    } catch (e) {
      setIsLoading(false);
      console.log("error", e);
    }
  };

  return (
    <>
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
          // error={getError()}
          onChange={(e: any) =>
            setLogin({ ...login, password: e.target.value })
          }
          value={login.password}
        />
        <Button onClick={handleSubmit} varinat="tertiary">
          {isLoading ? <Loader small /> : "Login"}
        </Button>
      </Flex>
    </>
  );
}
