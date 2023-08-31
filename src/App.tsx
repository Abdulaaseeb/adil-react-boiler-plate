// import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BasicTextFields from './components/Input';
import SelectVarients from './components/select';
import BasicButtons from './components/button';
import BasicSwitches from './components/switch'
import BasicIconButtons from './components/icon';
import BasicDatePicker from './components/date';
import ASTable from './components/table';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import './App.css';

function App() {

  let arrOfTable = [
    {
      name: "Adil",
      id: 1,
      age: 17,
      isActive: "Yes",
      category: "ABC",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
    {
      name: "Haseeb",
      id: 2,
      age: 16,
      isActive: "No",
      category: "DEF",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
    {
      name: "Raheem",
      id: 3,
      age: 13,
      isActive: "No",
      category: "GHI",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
    {
      name: "Shakoor",
      id: 4,
      age: 12,
      isActive: "No",
      category: "JKL",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
    {
      name: "Mannan",
      id: 5,
      age: 5,
      isActive: "Yes",
      category: "mno",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
    {
      name: "Ali",
      id: 6,
      age: 17,
      isActive: "No",
      category: "XYZ",
      fieldSet: <input className='rounded p-2' placeholder='Enter Your Message ' />,
    },
  ]
  return (
    <div className="App">
      <h1 className='text-center mt-5 text-danger' >COMPONENTS</h1>

      <h3 className='mt-5 text-danger ms-3'>INPUT COMPONENTS</h3>
      <BasicTextFields fieldValue='ABC' fieldLabel="ABC" fieldType='text' fieldChange={() => { alert("It's type is Text") }} />
      <BasicTextFields fieldValue='123' fieldLabel="123" fieldType='number' fieldChange={() => { alert("It's type is Email") }} />
      <BasicTextFields fieldValue='XYZ' fieldLabel="XYZ" fieldType='password' fieldChange={() => { alert("It's type is Password") }} />
      <BasicTextFields fieldValue='adii@gmail.com' fieldLabel="adii@gmail.com" fieldType='email' fieldChange={() => { alert("It's type is Email") }} />
      <BasicTextFields fieldValue='ADIL' fieldLabel="ADIL" fieldType='name' fieldChange={() => { alert("It's type is Name") }} />
      <h3 className='mt-5 ms-3 text-danger'>DATE PICKER COMPONENTS</h3>
      < BasicDatePicker  fieldType='date' fieldChange={(e:any) => { alert("Your date is" + " " + e.target.value) }}/>

      <h3 className=' mt-5 ms-3 text-danger'>SELECT COMPONENTS</h3>
      <SelectVarients options={[

        {
          value: "Samsung",
          displayName: "Samsung"
        },
        {
          value: "Vivo",
          displayName: "Vivo"
        },
        {
          value: "Infinix",
          displayName: "Infinix"
        },
        {
          value: "IPhone",
          displayName: "IPhone"
        },
        {
          value: "Oppo",
          displayName: "Oppo"
        },
      ]}
        getValue={(e: any) => { alert(e) }} />

      <h3 className='mt-5 ms-3 text-danger'>BUTTON COMPONENTS</h3>
      < BasicButtons displayBtn='BUTTON 1' clickBtn={() => { alert("BUTTON 1") }} />
      < BasicButtons displayBtn='BUTTON 2' clickBtn={() => { alert("BUTTON 2") }} />
      < BasicButtons displayBtn='BUTTON 3' clickBtn={() => { alert("BUTTON 3") }} />
      < BasicButtons displayBtn='BUTTON 4' clickBtn={() => { alert("BUTTON 4") }} />
      < BasicButtons displayBtn='BUTTON 5' clickBtn={() => { alert("BUTTON 5") }} />

      <h3 className=' mt-5 ms-3 text-danger'>ICON BUTTON COMPONENTS</h3>
      < BasicIconButtons iconName='MIC ICON' icons={<MicSharpIcon />} />
      < BasicIconButtons iconName='PHONE ICON' icons={<LocalPhoneSharpIcon />} />
      < BasicIconButtons iconName='ADD ICON' icons={<AddCircleSharpIcon />} />
      < BasicIconButtons iconName='ARROW BACK ICON' icons={<ArrowBackIosNewSharpIcon />} />
      < BasicIconButtons iconName='ARROW FORWARD ICON' icons={<ArrowForwardIosSharpIcon />} />


      <h3 className=' mt-5 ms-3 text-danger'>SWITCH COMPONENTS</h3>
      <span>
        <BasicSwitches switchAble={false} switchChecked={false} />
        <BasicSwitches switchAble={false} switchChecked />
        <BasicSwitches switchAble switchChecked={false} />
        <BasicSwitches switchAble switchChecked />
      </span>


      <h3 className=' mt-5  text-center text-danger'>TABLE COMPONENT</h3>
      <ASTable dataSource={arrOfTable} cols={[
        {
          heading: "NAME",
          key: "name"
        },
        {
          heading: "ID",
          key: "id"
        },
        {
          heading: "AGE",
          key: "age"
        },
        {
          heading: "ISACTIVE",
          key: "isActive"
        },
        {
          heading: "CATEGORY",
          key: "category"
        },
        {
          heading: "FIELD SET",
          key: "fieldSet"
        },
      ]} />
    </div>
  );
}

export default App;
