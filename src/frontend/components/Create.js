import React, { useState } from 'react';
import { ethers } from "ethers";
import { Row, Form, Button, Alert } from 'react-bootstrap';
import { create as ipfsHttpClient } from 'ipfs-http-client';
const lighthouse = require('@lighthouse-web3/sdk');
const apiKey = "93729a22.916d881056194843a3bbd571edf8a55b";

const Create = ({ marketplace, nft }) => {
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [mintingDetails, setMintingDetails] = useState(null);
  const [error, setError] = useState('');

  const uploadToIPFS = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (typeof file !== 'undefined') {
      try {
        const result = await lighthouse.uploadBuffer(file, apiKey);
        console.log(result);
        setImage("https://gateway.lighthouse.storage/ipfs/" + result.data.Hash);
        // After getting the IPFS hash, proceed with minting and listing steps
        mintNFT(result.data.Hash);
      } catch (error) {
        console.log("ipfs image upload error: ", error);
        setError('Error uploading image to IPFS.');
      }
    }
  };

  const mintNFT = async (ipfsHash) => {
    // Minting steps
    try {
      const uri = `https://gateway.lighthouse.storage/ipfs/${ipfsHash}`;
      const mintTx = await nft.mint(uri);
      await mintTx.wait();
      // Ensure tokenCount is retrieved properly
      const id = await nft.tokenCount();
      if (id == null || id === undefined) {
        throw new Error("Failed to retrieve token count.");
      }
      const approvalTx = await nft.setApprovalForAll(marketplace.address, true);
      await approvalTx.wait();
      const listingPrice = ethers.utils.parseEther(price.toString());
      const listTx = await marketplace.makeItem(nft.address, id, listingPrice);
      await listTx.wait();
      
      // Set minting details for display
      setMintingDetails({
        tokenId: id.toString(),
        name,
        description,
        price: ethers.utils.formatEther(listingPrice),
        imageUrl: uri
      });
    } catch (error) {
      console.error('Minting and listing error:', error);
      setError('Error minting and listing NFT.');
    }
  };

  const createNFT = async () => {
    if (!image || !price || !name || !description) return;
    try {
      const result = await lighthouse.upload(JSON.stringify({ image, price, name, description }), apiKey);
      console.log(result);
    } catch (error) {
      console.log("ipfs uri upload error: ", error);
      setError('Error uploading URI to IPFS.');
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="content mx-auto">
            <Row className="g-4">
              <Form.Control
                type="file"
                required
                name="file"
                onChange={uploadToIPFS}
              />
              <Form.Control onChange={(e) => setName(e.target.value)} size="lg" required type="text" placeholder="Name" />
              <Form.Control onChange={(e) => setDescription(e.target.value)} size="lg" required as="textarea" placeholder="Description" />
              <Form.Control onChange={(e) => setPrice(e.target.value)} size="lg" required type="number" placeholder="Price in ETH" />
              <div className="d-grid px-0">
                <Button onClick={createNFT} variant="primary" size="lg">
                  Create & List NFT!
                </Button>
              </div>
            </Row>
          </div>
          {mintingDetails && (
            <div className="mt-4">
              <Alert variant="success">
                <Alert.Heading>NFT Minted and Listed Successfully!</Alert.Heading>
                <p>
                  Token ID: {mintingDetails.tokenId}<br />
                  Name: {mintingDetails.name}<br />
                  Description: {mintingDetails.description}<br />
                  Price: {mintingDetails.price} ETH<br />
                </p>
                <img src={mintingDetails.imageUrl} alt="NFT" style={{ maxWidth: '100%', maxHeight: '400px' }} />
              </Alert>
            </div>
          )}
          {error && (
            <div className="mt-4">
              <Alert variant="danger">
                Error: {error}
              </Alert>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Create;
