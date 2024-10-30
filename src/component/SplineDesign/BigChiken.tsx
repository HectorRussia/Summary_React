import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';

export const BigChiken = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        
            <Spline
             /*    style={{
                    display: 'flex',
                    justifySelf:'center',
                    marginTop:'10rem',
                    width: '700px',
                    height:'600px'
                }} */
                scene="https://prod.spline.design/1S8ZwYRlqQXkrhrt/scene.splinecode" 
            />
            <Spline
        scene="https://prod.spline.design/JryvVGQ5bz3dcpUJ/scene.splinecode" 
      />
        </Suspense>
        
      )
}
