//Get commandline arguments
const profileDataArgs = process.argv.slice(2,process.argv.length);

//Function to process commandline arguments
const printProfileData = profileDataArr => {
    //Old scholl for loop
    // for (let i=0; i<profileDataArr.length; i++){
    //     console.log(profileDataArr[i]);
    // }

    //Clean forEach loop - prints to console
    profileDataArr.forEach((profileItem) =>console.log(profileItem));
}

// call our function to process the commandline arguments
printProfileData(profileDataArgs);