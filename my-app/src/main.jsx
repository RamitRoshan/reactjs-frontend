import { createRoot } from 'react-dom/client' 
import App from './App.jsx'
import EffectExample from './EffectExample.jsx'
import EffectExample2 from './EffectExample2.jsx'
import DynamicSelect from './DynamicSelect.jsx'
import EmployeeList from './EmployeeList.jsx'

createRoot(document.getElementById('root')).render(
    <>
    {/* <App /> */}
    {/* <EffectExample/> */}

    {/* <EffectExample2/> */}

    <DynamicSelect/>

    <EmployeeList/>
    </>
    
)

