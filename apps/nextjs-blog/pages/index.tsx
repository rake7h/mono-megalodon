import { useEffect } from 'react';

import {Button} from '@demo/components';
import {confings} from '@demo/configs'

export default function Home() {
  
  useEffect(()=>{
    console.log('config', confings)
  },[])

  return (
    <div >
     <Button>hello</Button>
    </div>
  );
}
