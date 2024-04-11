import { FC, useEffect, useState } from "react";
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
  EmptyStateLayout,
  Button,
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  Box,
  Typography,
  Flex,
} from "@strapi/design-system";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import UsersTable from "../../components/UsersTable";
import { usersRequest } from "../../api/users";
import { loginRequest } from "../../../../../login/admin/src/api/login";
import UserUpdate from "../../components/UserUpdate";
import AllUsers from "../../components/AllUsers";
import AddUser from "../../components/AddUser";
import LoginModal from "../../../../../login/admin/src/components/LoginModal";
import { IAdmin, IClients } from "../../types/clientes";
import Modal from "../../components/Modal";

const ProductCollection: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [users, setUsers] = useState<IAdmin>({} as IAdmin);
  const [allClients, setAllClients] = useState<IClients[]>([]);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [userEdit, setUserEdit] = useState({} as any);
  const [token, setToken] = useState("");
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({} as any);
  const [changeTitle, setChangeTitle] = useState({
    title: "Informações do usuario",
    description: "informaçoes do usuario gerente da conta.",
  });

  const authToken = localStorage.getItem("token");

  const fetchDataAllUsers = async () => {
    setLoading(true);
    try {
      const allUsers = await usersRequest.allUsers(authToken);
      setLoading(false);

      setAllClients(allUsers);
    } catch (e) {
      setLoading(false);
      console.log("error", e);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const users = await usersRequest.currentUser(authToken);
      setLoading(false);

      setUsers(users);
    } catch (e) {
      setLoading(false);
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataAllUsers();
  }, [reload]);

  const handleUserInfoEdit = async (id: string, user: any) => {
    setUserEdit(user);

    const body = {
      contractAccountId: id,
    };

    try {
      const usersAsAdmin = await loginRequest.loginAsAdmin(body, authToken);
      setToken(usersAsAdmin.token);
      setShowModalUpdate(true);
    } catch (e: any) {
      setShowModalUpdate(false);
      console.error("error", e.response.payload);
      setError(e.response.payload);
    }
  };

  useEffect(() => {
    if (error?.status) {
      error?.status == 500 && setShowModalError(true);
    }
  }, [error]);

  console.log({ error });

  if (loading) return <LoadingIndicatorPage />;

  return (
    <Layout>
      {authToken ? (
        <>
          {showModalError && (
            <Modal
              title="Ocorreu um erro"
              setShowModal={setShowModalError}
              children={
                <Flex alignItems="center" gap={11}>
                  <Typography
                    textColor="danger600"
                    lineHeight="20px"
                    fontSize="10px"
                  >
                    {error?.detail || error?.error?.message}
                  </Typography>
                </Flex>
              }
            />
          )}
          {showModal && (
            <UserUpdate
              setShowUpdateModal={setShowModal}
              users={users}
              userEdit={false}
            />
          )}
          {showModalUpdate && (
            <UserUpdate
              setShowUpdateModal={setShowModalUpdate}
              users={userEdit}
              userEdit={true}
              token={token}
            />
          )}
          {showAddModal && (
            <AddUser
              setShowAddModal={setShowAddModal}
              hasReload={() => setReload(true)}
            />
          )}
          <BaseHeaderLayout
            title={changeTitle.title}
            subtitle={changeTitle.description}
            as="h2"
          />
          <TabGroup
            label="Some stuff for the label"
            id="tabs"
            onTabChange={(result: number) => {
              const title =
                result == 0 ? "Informações do usuario" : "Todos clientes";

              const description =
                result == 0
                  ? "Informações do usuario"
                  : "informações de clientes";

              setChangeTitle({
                title,
                description,
              });
            }}
          >
            <Tabs>
              <Tab>Informações do usuario</Tab>
              {allClients?.length > 0 && <Tab>Todos clientes</Tab>}
            </Tabs>
            <TabPanels>
              <TabPanel>
                <ContentLayout>
                  {users ? (
                    <Box padding={8} background="primary100">
                      <UsersTable
                        users={users}
                        setShowModal={setShowModal}
                        setShowAddModal={setShowAddModal}
                      />
                    </Box>
                  ) : (
                    <EmptyStateLayout
                      icon={""}
                      content="Não foi possivel carregar..."
                      action={
                        <Button
                          onClick={() => {
                            setShowAddModal(true);
                          }}
                          variant="secondary"
                        >
                          Adicionar Usuario
                        </Button>
                      }
                    />
                  )}
                </ContentLayout>
              </TabPanel>
              <TabPanel>
                <Box padding={8} background="primary100">
                  <AllUsers users={allClients} editUser={handleUserInfoEdit} />
                </Box>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </>
      ) : (
        <LoginModal />
      )}
    </Layout>
  );
};

export default ProductCollection;
