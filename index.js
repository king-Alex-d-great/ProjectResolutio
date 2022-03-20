const connectWallet = async () => {
  let userHasMetaMask = checkForMetaMask();

  if (!userHasMetaMask) {
    alert("You do not have metamask!");
    return;
  }

  console.log("You have metamask!");
  let userHasAuthenticatedWallet = checkForAuthenticatedEthereumWallet();

  if (!userHasAuthenticatedWallet) {
    alert("You do not hve an have an authenticatdmetamask!");
  }

  console.log("You have  an authenticated metamask wallet!");

  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  location.replace('https://resolutio.ai/');
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