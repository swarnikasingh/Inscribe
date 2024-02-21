import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Row, Col, Card, Button } from "react-bootstrap";

const Home = ({ marketplace, nft }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const loadMarketplaceItems = async () => {
    try {
      const itemCount = await marketplace.itemCount();
      let loadedItems = [];
      for (let i = 1; i <= itemCount; i++) {
        const item = await marketplace.items(i);
        if (!item.sold) {
          const uri = await nft.tokenURI(item.tokenId);
          const response = await fetch(uri);
          const contentType = response.headers.get("content-type");
          let metadata = {};
          if (contentType && contentType.includes("application/json")) {
            metadata = await response.json();
          }
          const totalPrice = await marketplace.getTotalPrice(item.itemId);
          loadedItems.push({
            totalPrice,
            itemId: item.itemId,
            seller: item.seller,
            name: metadata.name || "Untitled",
            description: metadata.description || "No description",
            image: contentType && contentType.includes("image") ? uri : "", // Check if the response is an image
            tokenId: item.tokenId,
          });
        }
      }
      setItems(loadedItems);
    } catch (error) {
      console.error("Error loading marketplace items:", error);
    } finally {
      setLoading(false);
    }
  };

  const buyMarketItem = async (item) => {
    try {
      await (
        await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })
      ).wait();
      loadMarketplaceItems();
    } catch (error) {
      console.error("Error purchasing item:", error);
    }
  };

  useEffect(() => {
    const loadItems = async () => {
      try {
        await loadMarketplaceItems();
      } catch (error) {
        console.error("Error loading marketplace items:", error);
      }
    };

    loadItems();
  }, []);

  return (
    <div className="flex justify-center">
      {loading ? (
        <main style={{ padding: "1rem 0" }}>
          <h2>Loading...</h2>
        </main>
      ) : items.length > 0 ? (
        <div className="px-5 container">
          <Row xs={1} md={2} lg={4} className="g-4 py-5">
            {items.map((item, idx) => (
              <Col key={idx} className="overflow-hidden">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button
                      onClick={() => buyMarketItem(item)}
                      className="bg-black text-white mt-2"
                    >
                      Buy for {ethers.utils.formatEther(item.totalPrice)} ETH
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <main style={{ padding: "1rem 0" }}>
          <h2>No listed assets</h2>
        </main>
      )}
    </div>
  );
};

export default Home;
