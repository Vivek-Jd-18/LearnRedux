import React, { useEffect, useState } from 'react'
import Web3 from 'web3'


export const SignTransaction = () => {
    const [account, setaccount] = useState<string>('');
    const [web3, setweb3] = useState<any>();
    const [loading, setloading] = useState(false)

    async function getIn() {
        if (window.ethereum) {
            await window.ethereum.send('eth_requestAccounts');
            const web3 = new Web3(window.ethereum);
            setweb3(web3);
            const accounts = await web3.eth.getAccounts();
            setaccount(accounts[0]);
        }
    }

    const signMessage = async () => {
        setloading(true)
        const msg = "Hola";
        const signature = await web3.eth.personal.sign(msg, account);
        console.log(signature, "Signa");
        const verify = await web3.eth.personal.ecRecover(msg, signature);
        console.log(verify, "verification");
        setloading(false)
    }

    useEffect(() => {
        getIn()
    }, [])

    return (
        <>
            <div>SignTransaction</div>
            {
                loading ?
                    <button onClick={signMessage}>In Progress...</button>
                    :
                    <button onClick={signMessage}>Login</button>
            }
        </>
    )
}
