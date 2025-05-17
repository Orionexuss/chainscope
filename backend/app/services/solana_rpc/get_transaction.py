from solana.rpc.api import Client
from solders.signature import Signature


def get_transaction(tx_sig: str, client_url: str = "https://api.devnet.solana.com"):
    solana_client = Client(client_url)
    result = solana_client.get_transaction(Signature.from_string(tx_sig))

    if result.value is None:
        return None

    return result.value.to_json()
