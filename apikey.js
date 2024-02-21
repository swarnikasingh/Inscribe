const axios = require('axios')
const ethers = require('ethers')
const lighthouse = require('@lighthouse-web3/sdk')

const signAuthMessage = async(privateKey, messageRequested) =>{
  const signer = new ethers.Wallet(privateKey);
  const signedMessage = await signer.signMessage(messageRequested);
  return(signedMessage)
}

const getApiKey = async() =>{
  const wallet = {
    publicKey: "0xc8472B29298F43C08e72e8A74171f45d17c52a89",
    privateKey: "2c90becbff6837aabb21d5ae9447cd53f6cc59b0dc113cfaa4559311f0bf9954"
  }
  console.log(wallet)
  const verificationMessage = (
    await axios.get(
        `https://api.lighthouse.storage/api/auth/get_message?publicKey=${wallet.publicKey}`
    )
  ).data
  const signedMessage = await signAuthMessage(wallet.privateKey, verificationMessage)
  const response = await lighthouse.getApiKey(wallet.publicKey, signedMessage)
  console.log(response)
}

getApiKey()