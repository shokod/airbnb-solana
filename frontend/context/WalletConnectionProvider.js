import {
	ConnectionProvider,
	WalletProvider
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";

const WalletConnectionProvider = ({ children }) => {
	const endpoint = useMemo(
		() =>
			"https://red-white-knowledge.solana-devnet.discover.quiknode.pro/04bddc897ce268f783d4da35b4523b00d21ef412/",
		[]
	);

	const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} autoConnect>
				<WalletModalProvider>{children}</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
};

export default WalletConnectionProvider;
