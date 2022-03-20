const connectWallet = async () => {
  console.log("Connecting ....")
}

const checkForMetaMask = async () => {
  const { ethereum } = window;

  if (!ethereum) {
    alert("You need to install metamask");
    return false;
  }

  await checkForAuthenticatedEthereumWallet();
  return true;
}

const checkForAuthenticatedEthereumWallet = async () => {
  console.log("yes")
}  