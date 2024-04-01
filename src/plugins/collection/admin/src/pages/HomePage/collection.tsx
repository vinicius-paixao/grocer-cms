import { FC, useEffect, useState } from "react";
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
  EmptyStateLayout,
  Button,
  Box,
} from "@strapi/design-system";
import CollectionsTable from "../../components/CollectionsTable";
import axios from "axios";
import ViewCollection from "../../components/ViewCollection";
import EditCollection from "../../components/EditCollection";
import CreateCollection from "../../components/CreateCollection";
import { ICollection } from "../../types/collection";

const Collection: FC = () => {
  const [allCollections, setAllCollections] = useState<ICollection[]>([]);
  const [viewCollection, setViewCollection] = useState(false);
  const [editCollection, setEditCollection] = useState(false);
  const [collection, setCollection] = useState({} as ICollection);
  const [createCollection, setCreateCollection] = useState(false);
  const [updateReload, setUpdateReload] = useState(false);

  const fetchData = async () => {
    try {
      const collections = await axios.get("/api/collections");
      const collection = collections.data;

      setAllCollections(collection.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [updateReload]);

  async function handleEdit() {
    setEditCollection(!editCollection);
  }

  const handleViewOne = async (id: string) => {
    setViewCollection(true);

    try {
      const collections = await axios.get(`/api/collections/${id}`);
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

  const handleDeleteCollection = async (id: string) => {
    await axios
      .delete(`/api/collections/${id}`)
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <Layout>
      <BaseHeaderLayout
        title="Coleções"
        subtitle="Todas suas coleções um um unico lugar."
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
                    update={setUpdateReload}
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
                  <CreateCollection backToCollection={handleCollectionCreate} />
                ) : (
                  <CollectionsTable
                    collectionsData={allCollections}
                    collectionView={handleViewOne}
                    collectionDelete={handleDeleteCollection}
                    collectionCreate={handleCollectionCreate}
                  />
                )}
              </>
            )}
          </Box>
        ) : (
          <>
            {!createCollection ? (
              <EmptyStateLayout
                icon={""}
                content="Não ha coleções..."
                action={
                  <Button onClick={handleCollectionCreate} variant="secondary">
                    Criar coleção
                  </Button>
                }
              />
            ) : (
              <CreateCollection backToCollection={handleCollectionCreate} />
            )}
          </>
        )}
      </ContentLayout>
    </Layout>
  );
};

export default Collection;
