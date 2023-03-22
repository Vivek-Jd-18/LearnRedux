import React, { useEffect, useState } from 'react'
import Web3 from 'web3'


export const SignTransaction = () => {
    const [account, setaccount] = useState<string>('');
    const [web3, setweb3] = useState<any>();
    const [loading, setloading] = useState(false);
    const [message, setMessage] = useState("");
    const [signature, setSignature] = useState("");


    const messageHandler = (e: any) => {
        setMessage(e.target.value);
    }

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
        if (message.length > 0) {
            setloading(true)
            try {
                const _signature = await web3.eth.personal.sign(message, account);
                setSignature(_signature);
            } catch (e: any) {
                alert(e.message)
                setloading(false);
            }
            setloading(false);
            return
        }
        else {
            alert("Enter some message first");
        }
    }

    const verifyMessage = async () => {
        if (message.length > 0) {
            setloading(true)
            const verify = await web3.eth.personal.ecRecover(message, signature);
            console.log(verify, "verification");
            if ((verify.toString()).toLowerCase() == account.toLowerCase()) {
                alert("Valid User");
            } else {
                alert("Invalid user");
            }
            setloading(false)
            return
        }
        alert("Enter some message first to verify");
    }

    useEffect(() => {
        getIn()
    }, [])

    return (
        <>
            <div>SignTransaction</div>
            <label>Enter Message to sign: </label><input type="text" value={message} onChange={messageHandler} />
            {
                loading ?
                    <button className='btn btn-primary' disabled>In Progress...</button>
                    :
                    <button onClick={signMessage}>Login</button>
            }<br />
            {
                loading ?
                    <button disabled>Verifyin...</button>
                    :
                    <button onClick={verifyMessage}>Verify</button>
            }
        </>
    )
}
