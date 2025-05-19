from solana.rpc.api import Client
from solders.signature import Signature


def get_transaction(tx_sig: str, client_url: str = "https://api.mainnet-beta.solana.com"):
    solana_client = Client(client_url)
    result = solana_client.get_transaction(Signature.from_string(tx_sig), max_supported_transaction_version=0)

    if result.value is None:
        return None

    return result.value.to_json()


if __name__=="__main__":
    print(get_transaction('3YznSgFtWs4p4J9d6VDbEjsyUTvYyFKcMXeyQcKCfQEraianU8P1UuMQFG6bdB4y6T1EXVH5BV9mfCzE1HboAYzv'))
