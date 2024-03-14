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
// import SalesChannelModal from "../../components/SalesChannelModal";
// import BrandModalUpdate from "../../components/BrandModalUpdate";
// import { ProductCollectionModal } from "../../components/ProductCollectionModal";
// import { useProductCollection } from "../../context/ProductCollectionContext";
// import { ProductListTable } from "../../components/ProductCollectionList";

const ProductCollection: FC = () => {
  const [showModal, setShowModal] = useState(false);
  // const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  // const [id, setId] = useState("");

  const fetchData = async () => {
    try {
      const allUsers = await usersRequest.allUsers();
      console.log("dasdasd");
      console.log(allUsers);

      setAllUsers(allUsers);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      {/* {showModal && <SalesChannelModal setShowModal={setShowModal} />} */}
      <BaseHeaderLayout
        title="Users"
        subtitle="All your users in one place."
        as="h2"
      />
      <ContentLayout>
        {allUsers?.length > 0 ? (
          <Box padding={8} background="primary100">
            <UsersTable
              users={allUsers}
              setShowModal={setShowModal}
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
                  setShowModal(true);
                }}
                variant="secondary"
              >
                Add brand
              </Button>
            }
          />
        )}
      </ContentLayout>
    </Layout>
  );
};

export default ProductCollection;
