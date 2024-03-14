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
// import BrandModal from "../../components/BrandModal";
import { contractAccountsRequest } from "../../api/contractAccounts";
import SalesChannelModal from "../../components/ContractAccountsModal";
import ContractAccountsTable from "../../components/ContractAccountsTable";
// import BrandModalUpdate from "../../components/BrandModalUpdate";
// import { ProductCollectionModal } from "../../components/ProductCollectionModal";
// import { useProductCollection } from "../../context/ProductCollectionContext";
// import { ProductListTable } from "../../components/ProductCollectionList";

const ProductCollection: FC = () => {
  const [showModal, setShowModal] = useState(false);
  // const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [allCa, setAllCa] = useState([]);
  // const [id, setId] = useState("");

  const fetchData = async () => {
    try {
      const allCa = await contractAccountsRequest.getAllContracts();
      console.log(allCa);

      setAllCa(allCa);
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
      {showModal && <SalesChannelModal setShowModal={setShowModal} />}
      <BaseHeaderLayout
        title="Contract Accounts"
        subtitle="All your contract accounts in one place."
        as="h2"
      />
      <ContentLayout>
        {allCa?.length > 0 ? (
          <Box padding={8} background="primary100">
            <ContractAccountsTable
              contractAccounts={allCa}
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
            content="You don't have any contract accounts yet..."
            action={
              <Button
                onClick={() => {
                  setShowModal(true);
                }}
                variant="secondary"
              >
                Add contract account
              </Button>
            }
          />
        )}
      </ContentLayout>
    </Layout>
  );
};

export default ProductCollection;
