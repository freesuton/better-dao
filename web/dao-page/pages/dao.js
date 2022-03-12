import {useEffect,useState,useContext}  from 'react'
import {CountContext} from '../comps/Layout'
// import {ethers} from 'ethers'
import Web3 from 'web3';
import DAO from './contracts/DAO.json'
import {getWeb3,getContract} from '../pages/api/utils'
import styles from '../styles/dao.module.css'

//---------------------------

//Material UI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { id } from 'ethers/lib/utils';
import { Description } from '@ethersproject/properties';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
//---------------------------


const Dao = () => {
    const config = useContext(CountContext); // 得到每次更新的config
    const [connected, setConnected] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [taskId, setTaskId] = useState();
    const [desc, setDesc] = useState();
    const [credit, setCredit] = useState();
    const [contract, setContract] = useState();


    async function mint()  {

        console.log(tasks[0].id);
    }


    useEffect(async() => {


        const contractAddress = "0x5d645Eee452f4E3Eb669a4f6aB53b57DD85F57A5";
        const provider = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
        const contract = await getContract(contractAddress,provider,DAO.abi);
        setContract(contract);

        const taskInfo = await contract.methods.tasks(0).call();
        const newArr =[];
        for (let i = 0; i < 4; i++) {
            const task = await contract.methods.tasks(i).call();
            newArr = [...newArr,task];
            setTasks(newArr);
            //  tasks.push(await contract.methods.tasks(i).call());  
        }
        for (let i = 0; i < 2; i++) {
            // console.log(tasks);
            console.log(tasks[i]);
            
        }

      }, []);

    return (
        <div style={{marginBottom:"80px"}}>
            <section className="intro" >
            <Container maxWidth="md">
                <div className={styles.dao__title}><h2>Tasks{config.lang}</h2></div>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {tasks.map(task=>(
                            <Grid item xs={12} md={6} >
                                <Item className={styles.dao__grid}>
                                    <p>id: {task.id}</p>
                                    <p>Credit: {task.credit}</p>
                                    <p>Description:{desc}</p>
                                    <button>Take</button>
                                    <div onClick={(e) => mint(e)} className="header__btn-wrapper" style={{marginTop:"6%"}}>
                                        <span className="header__btn-text">Take Task</span>
                                        <img src="assets/images/glass.png" alt="glass" className="header__btn-glass"/>
                                    </div>
                                </Item>
                            </Grid>
                        ))}
                            {/* <Grid item xs={6} >
                                <Item className={styles.dao__grid}>
                                    <p>id: {taskId}</p>
                                    <p>Credit: {credit}</p>
                                    <p>Description:{desc}</p>
                                    <div onClick={(e) => mint(e)} className="header__btn-wrapper" style={{marginTop:"6%"}}>
                                        <span className="header__btn-text">Take Task</span>
                                        <img src="assets/images/glass.png" alt="glass" className="header__btn-glass"/>
                                    </div>
                                </Item>
                            </Grid> */}
                    </Grid>
                </Box>
            </Container>
 
                
                {/* <div className="hero">
                    
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
                    
                </div> */}

            </section>
        </div>
    );
}

export default Dao;