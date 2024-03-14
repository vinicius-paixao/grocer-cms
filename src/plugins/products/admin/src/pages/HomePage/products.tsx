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
import ProductsTable from "../../components/ProductsTable";
import EditProduct from "../../components/EditProduct";
import CreateProduct from "../../components/CreateProduct";
// import BrandModal from "../../components/BrandModal";
import { productsRequest } from "../../api/products";
// import BrandModalUpdate from "../../components/BrandModalUpdate";
// import { ProductCollectionModal } from "../../components/ProductCollectionModal";
// import { useProductCollection } from "../../context/ProductCollectionContext";
// import { ProductListTable } from "../../components/ProductCollectionList";

const Products: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [editProduct, setEditProduct] = useState(false);
  const [createProducts, setCreateProducts] = useState(false);

  const fetchData = async () => {
    try {
      const allProducts = await productsRequest.getAllProducts();
      console.log("dasdasd");
      console.log(allProducts);

      setAllProducts(allProducts);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log({ allBrands });

  // async function toggleTodo(data: any) {
  //   alert("Add Toggle Todo in API");
  // }

  async function deleteTodo(data: any) {
    console.log("delete", { data });
    // try {
    //   const allbrands = await brandsRequest.deleteBrands(data);
    //   console.log("delete");
    //   console.log(allbrands);
    //   setShowModal(false);
    // } catch (e) {
    //   console.log("error", e);
    // }
  }

  async function productEdit(id: any) {
    console.log("Add Edit Todo in API", id);
    setEditProduct(!editProduct);
    setProductId(id);
  }

  async function handleCreate() {
    console.log("dasda");
    setCreateProducts(!createProducts);
  }

  return (
    <Layout>
      {/* {showModal && <BrandModal setShowModal={setShowModal} />}
      {showUpdateModal && (
        <BrandModalUpdate setShowUpdateModal={setShowUpdateModal} id={id} />
      )} */}
      <BaseHeaderLayout
        title="Products"
        subtitle="All your products in one place."
        as="h2"
      />
      <ContentLayout>
        {allProducts?.length > 0 ? (
          <Box padding={8} background="primary100">
            {editProduct ? (
              <EditProduct
                productId={productId}
                productEdit={allProducts}
                backToProduct={productEdit}
              />
            ) : createProducts ? (
              <CreateProduct backToProduct={handleCreate} />
            ) : (
              <ProductsTable
                productsData={allProducts}
                setShowModal={setShowModal}
                setShowUpdateModal={setShowUpdateModal}
                // toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                productEdit={productEdit}
                createProducts={handleCreate}
              />
            )}
          </Box>
        ) : (
          <EmptyStateLayout
            icon={""}
            content="You don't have any brands yet..."
            action={
              <Button
                onClick={() => {
                  setCreateProducts(true);
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
