import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

function ProfileModel({modelOpened,setModelOpened}) {
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
        <form className='infoForm'>
            <h3>Your Info</h3>
            <div>
                <input type="text" className="infoInput" name="FirstName" placeholder='First Name'/>
                <input type="text" className="infoInput" name="LastName" placeholder='Last Name'/>
            </div>
            <div>
              <input type="text" className="infoInput" name="WorksAt" placeholder='Works at'
              />
            </div>
            <div>
            <input type="text" className="infoInput" name="LivesIN" placeholder='Lives in'/>
            <input type="text" className="infoInput" name="Country" placeholder='Country'/>
            </div>
            <div>
              <input type="text" className='infoInput' placeholder='RelationShip Status'/>
            </div>
            <div>
              Profile Image
              <input type="file" name='profileImg'/>
              Cover Image
              <input type="file" name='coverImg'/>
            </div>
            <button className='button infoButton'>Update</button>
        </form>
      </Modal>

      
    </>
  );
}
export default ProfileModel