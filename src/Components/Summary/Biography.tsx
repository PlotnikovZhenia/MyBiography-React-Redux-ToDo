import React from 'react';
import GeneralInformation from './General/GeneralInformation';
import Contacts from './Contscts/Contacts';
import Education from './education/education';
import classes from './Biography.module.scss';
import AdditionalEducation from './Additional_Education/Additional_Education';
import Work from './Work/Work';
import Navbar from '../Navbar';

const Biography: React.FC=()=>{
  return (
    <>
      <Navbar/>
      <div className={classes.general}>
        <GeneralInformation/>
        <hr/>
        <Education/>
        <hr/>
        <AdditionalEducation/>
        <hr/>
        <Work/>
        <hr/>
        <Contacts/>
      </div>
    </>
  );
}

export default Biography;
