import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[url(src/assets/bg2.png)] bg-cover bg-center">
      <div className="flex flex-row items-center justify-between">
        <img src="src/assets/mdi_keyboard-return.svg" alt="logo" className="w-12" />
        <h1 className="text-6xl text-[#FDCE82]">S2EE</h1>
        <img src="src/assets/Group 35.svg" alt="logo" />
      </div>
      <div className="flex flex-row justify-around mt-16 ">
      
      <div className="w-[250px]">
        <div className="rounded-full w-[200px] h-[200px] overflow-hidden">
          <img className="w-full h-full object-cover" src="src/assets/djezzy2.png" alt="logo" />
        </div>
        <h1 className="text-[#FDCE82] text-3xl mb-1 ">Entreprise</h1>
        <div className="flex flex-row items-center bg-[#C4C5C9] w-60 rounded-[5px] mb-3"> 
          <img src="src/assets/material-symbols_mail-outline.svg" alt="logo" className="mr-3" />
          <p>Entreprise@gmail.com</p>
        </div>
        <div className="flex flex-row items-center bg-[#C4C5C9] w-60 p-1.5 rounded-[5px]"> 
          <img src="src/assets/Group 40.svg" alt="logo" className="mr-4" />
          <p>Adresse</p>
        </div>
      </div >
      <div>
    <div className="flex flex-row justify-evenly items-start w-[300px] mb-[7px]">
        <button className=" p-[2px] rounded-xl w-[100px] bg-[#FDCE82] ">Profiles</button>
        <button className=" p-[2px] rounded-xl w-[100px] bg-[#FDCE82]">Information</button>
      </div>
      <div className="bg-[#FDCE82] h-[3px]"></div>
        <ul className="text-white flex flex-col gap-8 mt-5 text-xl">
         <il >Nom:</il>
         <il>Prénom:</il>
         <il>Poste:</il>
         <il>Numéro:</il>
         <il>Linkedin:</il>
         <il>Status de contact :</il>
        </ul>
      
     
  </div>
  </div>
    </div>
  );
};

export default Profile;
