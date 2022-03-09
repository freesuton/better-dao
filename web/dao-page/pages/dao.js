import {useEffect,useState}  from 'react'
// import {ethers} from 'ethers'
import Web3 from 'web3';
import DAO from './contracts/DAO.json'
import {getWeb3,getContract} from '../pages/api/utils'

const Dao = () => {
    const [connected, setConnected] = useState(false);
    const [taskId, setTaskId] = useState();
    const [desc, setDesc] = useState();
    const [credit, setCredit] = useState();
    const [contract, setContract] = useState();


    async function mint()  {

        console.log( desc);
    }


    useEffect(async() => {

        // setValue(await contract.nextTaskId)
        // console.log(contract.nextTaskId);
        // console.log(contract.getTestId());
        // getWeb3();
        const contract = await getContract();
        setContract(contract);

        const taskInfo = await contract.methods.tasks(0).call();
        setTaskId(taskInfo.finished);
        setDesc(taskInfo.desc);
        setCredit(taskInfo.credit);
        

      }, []);

    return (
        <div>
            <section className="intro">
                <div className="hero">
                    <div className="hero__content" style={{background:"rgb(0,0,0,0.9)", padding:"2%", borderRadius:"20px"}}>
                    <div className="hero__title-wrapper" >
                        <p className="hero__subtitle">Please Connect Wallet</p>
                    </div>
                    <p className="hero__subtitle">
                        Mint Price: 0.05 ETH
                    </p>
                    <div onClick={(e) => mint(e)} className="header__btn-wrapper" style={{marginTop:"6%"}}>
                            <span className="header__btn-text">Mint</span>
                            <img src="assets/images/glass.png" alt="glass" className="header__btn-glass"/>
                    </div>
                    </div>
                    
                </div>

        </section>
        </div>
    );
}

export default Dao;