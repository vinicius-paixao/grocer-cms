import { FC, useEffect, useState } from "react";
import {
  Layout,
  BaseHeaderLayout,
  HeaderLayout,
  ContentLayout,
  EmptyStateLayout,
  Button,
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  Box,
} from "@strapi/design-system";
import UsersTable from "../../components/UsersTable";
// import BrandModal from "../../components/BrandModal";
import { usersRequest } from "../../api/users";
import {loginRequest} from "../../../../../login/admin/src/api/login"
import UserUpdate from "../../components/UserUpdate";
import AllUsers from "../../components/AllUsers";
import AddUser from "../../components/AddUser";
// import SalesChannelModal from "../../components/SalesChannelModal";
// import BrandModalUpdate from "../../components/BrandModalUpdate";
// import { ProductCollectionModal } from "../../components/ProductCollectionModal";
// import { useProductCollection } from "../../context/ProductCollectionContext";
// import { ProductListTable } from "../../components/ProductCollectionList";

const ProductCollection: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [users, setUsers] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [showModalUpdate, setShowModalUpdate] = useState(false)
  const [userEdit, setUserEdit] = useState({} as any)
  const [token, setToken] = useState('')
  // const [showUpdateModal, setShowUpdateModal] = useState(false);
  // const [id, setId] = useState("");

  const fetchDataAllUsers = async () => {
    try {
      const allUsers = await usersRequest.allUsers();
      console.log("dasdasd");
      console.log(allUsers);

      setAllUsers(allUsers);
    } catch (e) {
      console.log("error", e);
    }
  };

  const fetchData = async () => {
    try {
      const users = await usersRequest.currentUser();
      console.log("dasdasd");
      console.log(users);

      setUsers(users);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataAllUsers();
  }, []);

  const handleUserInfoEdit =async (id: string, user: any) => {
    setShowModalUpdate(true)
    setUserEdit(user)

    console.log({id, user})
    const body  = {
      contractAccountId: id
    }

    try {
      const usersAsAdmin = await loginRequest.loginAsAdmin(body);
      console.log({usersAsAdmin});
      setToken(usersAsAdmin.token)

      // setUsers(usersAsAdmin);
    } catch (e) {
      setShowModalUpdate(false)
      console.log("error", e);
    }
   }

  // async function toggleTodo(data: any) {
  //   alert("Add Toggle Todo in API");
  // }

  // async function deleteTodo(data: any) {
  //   console.log("delete", { data });
  //   // try {
  //   //   const allbrands = await brandsRequest.deleteBrands(data);
  //   //   console.log("delete");
  //   //   console.log(allbrands);
  //   //   setShowModal(false);
  //   // } catch (e) {
  //   //   console.log("error", e);
  //   // }
  // }

  // async function editTodo(id: any) {
  //   alert("Add Edit Todo in API");
  // }

  // async function brandId(id: any) {
  //   console.log("dasda", id);
  //   setId(id);
  // }

  return (
    <Layout>
      {showModal && (
        <UserUpdate setShowUpdateModal={setShowModal} users={users} userEdit={false}/>
      )}

      {showModalUpdate && (
        <UserUpdate setShowUpdateModal={setShowModalUpdate} users={userEdit} userEdit={true} token={token}/>
      )}

      {showAddModal && <AddUser setShowAddModal={setShowAddModal} />}

      <BaseHeaderLayout
        title="User Info"
        subtitle="All your users in one place."
        as="h2"
      />

      <TabGroup
        label="Some stuff for the label"
        id="tabs"
        onTabChange={(selected: any) => console.log(selected)}
      >
        <Tabs>
          <Tab>User Info</Tab>
          {allUsers?.length > 0 && <Tab>All Users</Tab>}
        </Tabs>
        <TabPanels>
          <TabPanel>
            {/* <Box color="neutral800" padding={4} background="neutral0"> */}
            <ContentLayout>
              {users ? (
                <Box padding={8} background="primary100">
                  <UsersTable
                    users={users}
                    setShowModal={setShowModal}
                    setShowAddModal={setShowAddModal}
                    // setShowUpdateModal={setShowUpdateModal}
                    // toggleTodo={toggleTodo}
                    // deleteSC={deleteTodo}
                    // editTodo={editTodo}
                    // brandId={brandId}
                  />
                </Box>
              ) : (
                <EmptyStateLayout
                  icon={""}
                  content="You don't have any brands yet..."
                  action={
                    <Button
                      onClick={() => {
                        setShowAddModal(true);
                      }}
                      variant="secondary"
                    >
                      Add brand
                    </Button>
                  }
                />
              )}
            </ContentLayout>
            {/* </Box> */}
          </TabPanel>
          <TabPanel>
            <Box padding={8} background="primary100">
              <AllUsers users={allUsers} editUser={handleUserInfoEdit}/>
            </Box>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Layout>
  );
};

export default ProductCollection;
