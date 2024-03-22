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
import CollectionsTable from "../../components/CollectionsTable";
import axios from "axios";
import ViewCollection from "../../components/ViewCollection";
import EditCollection from "../../components/EditCollection";
import CreateCollection from "../../components/CreateCollection";
// import EditProduct from "../../components/EditProduct";
// import CreateProduct from "../../components/CreateProduct";
// import BrandModal from "../../components/BrandModal";
// import { productsRequest } from "../../api/products";
// import BrandModalUpdate from "../../components/BrandModalUpdate";
// import { ProductCollectionModal } from "../../components/ProductCollectionModal";
// import { useProductCollection } from "../../context/ProductCollectionContext";
// import { ProductListTable } from "../../components/ProductCollectionList";

const Products: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [allCollections, setAllCollections] = useState({} as any);
  const [viewCollection, setViewCollection] = useState(false);
  const [editCollection, setEditCollection] = useState(false);
  const [collection, setCollection] = useState({} as any);
  const [createCollection, setCreateCollection] = useState(false);

  const fetchData = async () => {
    try {
      const collections = await axios.get("/api/collections");
      console.log("dasdasd");
      console.log(allCollections);

      const collection = collections.data;

      setAllCollections(collection.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function handleEdit() {
    setEditCollection(!editCollection);
  }

  const handleViewOne = async (id: any) => {
    setViewCollection(true);
    console.log({ id });

    try {
      const collections = await axios.get(`/api/collections/${id}`);
      console.log("dasdasd");
      console.log(allCollections);

      const collection = collections.data;

      setCollection(collection.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleBackToView = () => {
    setEditCollection(false);
  };

  const handleToCollection = () => {
    setViewCollection(false);
  };

  const handleCollectionCreate = () => {
    setCreateCollection(!createCollection);
  };

  const handleDeleteCollection = async (id: any) => {
    await axios
      .delete(`/api/collections/${id}`)
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <Layout>
      {/* {showModal && <BrandModal setShowModal={setShowModal} />}
      {showUpdateModal && (
        <BrandModalUpdate setShowUpdateModal={setShowUpdateModal} id={id} />
      )} */}
      <BaseHeaderLayout
        title="Collections"
        subtitle="All yours collections in one place."
        as="h2"
      />
      <ContentLayout>
        {allCollections?.length > 0 ? (
          <Box padding={8} background="primary100">
            {viewCollection ? (
              <>
                {editCollection ? (
                  <EditCollection
                    collection={collection}
                    backToView={handleBackToView}
                  />
                ) : (
                  <ViewCollection
                    collection={collection}
                    collectionEdit={handleEdit}
                    backToCollection={handleToCollection}
                  />
                )}
              </>
            ) : (
              <>
                {createCollection ? (
                  <CreateCollection backToCollection={handleCollectionCreate}/>
                ) : (
                  <CollectionsTable
                    collectionsData={allCollections}
                    setShowModal={setShowModal}
                    setShowUpdateModal={setShowUpdateModal}
                    collectionView={handleViewOne}
                    collectionDelete={handleDeleteCollection}
                    collectionCreate={handleCollectionCreate}
                  />
                )}
              </>
            )}

          </Box>
        ) : (
          <EmptyStateLayout
            icon={""}
            content="You don't have any brands yet..."
            action={
              <Button
                onClick={handleCollectionCreate}
                variant="secondary"
              >
                Add collection
              </Button>
            }
          />
        )}
      </ContentLayout>
    </Layout>
  );
};

export default Products;
