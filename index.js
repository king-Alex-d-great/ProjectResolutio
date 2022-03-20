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
  var accounts = await ethereum.request({ method: 'eth_accounts' })

  if (accounts.length !== 0) {
    console.log(`Authorized Account found: ${accounts[0]}`);
    return true;
  }
  console.log("no account found ");
  return false;
}  