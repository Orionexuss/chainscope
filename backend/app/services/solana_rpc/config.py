import asyncio
from solana.rpc.commitment import Commitment
from solana.rpc.websocket_api import connect
from solders.pubkey import Pubkey

async def subscribe_to_account(account_pubkey: str, websocket_url: str = "wss://api.devnet.solana.com"):
    async with connect(websocket_url) as websocket:
        await websocket.account_subscribe(Pubkey.from_string(account_pubkey), commitment=Commitment("confirmed"))
        print(f" Subscribed to {account_pubkey}")

        while True:
            msg = await websocket.recv()
            print("Event received:")
            print(msg)

if __name__ == "__main__":
    asyncio.run(subscribe_to_account('iWCxbhDZmZsDTdNtc6J9jxE5s1mbt7dicVZ8jR9Eae7'))
