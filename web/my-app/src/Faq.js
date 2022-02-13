import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  style={{background:"#1A1C25", color:"#fff"}}>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color:"#fff"}} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
          >
            <Typography >
               How to mint with Metamask on a mobile phone?
            </Typography>
            {/*<Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>*/}
          </AccordionSummary>
          <AccordionDetails  style={{background:"#1A1C25", color:"#fff"}}>
            <Typography>
              If you are using a mobile phone to mint our lovely BetterDAO, you need to use the Metamask application built-in browser to mint our NFTs. Therefore, please launch the Metamask application, click the 3 lines on the top left menu in the application and select "Browser". It will open a web browser and you will be able to navigate back to BetterDAO.com to do the minting.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  style={{background:"#1A1C25", color:"#fff"}}>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color:"#fff"}}/>}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
          >
            <Typography >How to mint with Metamask on a computer?</Typography>
            {/*<Typography sx={{ color: 'text.secondary' }}>*/}
            {/*  You are currently not an owner*/}
            {/*</Typography>*/}
          </AccordionSummary>
          <AccordionDetails >
            <Typography>
              If you are using a computer to mint our lovely BetterDAO, you just need to connect the Metamask plugin with our website, verify you have enough ETH to do the transaction, then you will be able to click on the Mint button to buy a few BetterDAO.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  style={{background:"#1A1C25", color:"#fff"}}>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon  style={{ color:"#fff"}} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
          >
            <Typography>
              How to pay less gas fees?
            </Typography>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              https://metamask.zendesk.com/hc/en-us/articles/360015488771-How-to-adjust-Gas-Price-and-Gas-Limit
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/*<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>*/}
        {/*  <AccordionSummary*/}
        {/*      expandIcon={<ExpandMoreIcon />}*/}
        {/*      aria-controls="panel4bh-content"*/}
        {/*      id="panel4bh-header"*/}
        {/*  >*/}
        {/*    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>*/}
        {/*  </AccordionSummary>*/}
        {/*  <AccordionDetails>*/}
        {/*    <Typography>*/}
        {/*      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit*/}
        {/*      amet egestas eros, vitae egestas augue. Duis vel est augue.*/}
        {/*    </Typography>*/}
        {/*  </AccordionDetails>*/}
        {/*</Accordion>*/}
      </div>
  );
}
