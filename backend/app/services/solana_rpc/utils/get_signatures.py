from solana.rpc.api import Client
from solana.rpc.commitment import Commitment
from solders.pubkey import Pubkey


def get_signatures(
    pubkey: str,
    client_url: str = "wss://api.devnet.solana.com",
) -> list[str]:
    solana_client = Client(client_url)
    all_signatures = []

    while True:
        response = solana_client.get_signatures_for_address(
            Pubkey.from_string(pubkey), limit=None, commitment=Commitment("finalized")
        )
        all_signatures.extend([str(tx.signature) for tx in response.value])
        break

    return all_signatures
