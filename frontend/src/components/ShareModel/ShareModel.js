import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

function ShareModel({modelOpened,setModelOpened}) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
      overlayOpacity={0.50}
      overlayBlur={3}
      size='55%'
        opened={modelOpened}
        onClose={()=>setModelOpened(false)}
    
         
      >
        <PostShare/>
    
      </Modal>

      
    </>
  );
  }
export default ShareModel