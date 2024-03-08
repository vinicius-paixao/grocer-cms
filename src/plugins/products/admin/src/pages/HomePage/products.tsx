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
import BrandsTable from "../../components/BrandsTable";
import BrandModal from "../../components/BrandModal";
import { brandsRequest } from "../../api/brands";
import BrandModalUpdate from "../../components/BrandModalUpdate";
// import { ProductCollectionModal } from "../../components/ProductCollectionModal";
// import { useProductCollection } from "../../context/ProductCollectionContext";
// import { ProductListTable } from "../../components/ProductCollectionList";

const Products: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [allBrands, setAllBrands] = useState([]);
  const [id, setId] = useState("");

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

  useEffect(() => {
    fetchData();
  }, []);

  console.log({ allBrands });

  async function toggleTodo(data: any) {
    alert("Add Toggle Todo in API");
  }

  async function deleteTodo(data: any) {
    console.log("delete", { data });
    try {
      const allbrands = await brandsRequest.deleteBrands(data);
      console.log("delete");
      console.log(allbrands);
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  }

  async function editTodo(id: any) {
    alert("Add Edit Todo in API");
  }

  async function brandId(id: any) {
    console.log("dasda", id);
    setId(id);
  }

  return (
    <Layout>
      {showModal && <BrandModal setShowModal={setShowModal} />}
      {showUpdateModal && (
        <BrandModalUpdate setShowUpdateModal={setShowUpdateModal} id={id} />
      )}
      <BaseHeaderLayout
        title="Brands"
        subtitle="All your brands in one place."
        as="h2"
      />
      <ContentLayout>
        {allBrands?.length > 0 ? (
          <Box padding={8} background="primary100">
            <BrandsTable
              todoData={allBrands}
              setShowModal={setShowModal}
              setShowUpdateModal={setShowUpdateModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              brandId={brandId}
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

export default Products;
