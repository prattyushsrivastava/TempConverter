const calculateTemp =()=>{
    const numberTemp= document.getElementById('temp').value;
    const degree= document.getElementById('temp_diff');

    const degreeval=degree.options[degree.selectedIndex].value;

    const celToFah =(c)=>{
        let fahrenheit =Math.round((c*9/5)+32);
        return fahrenheit;
    }
    const FahTocel =(f)=>{
        let celcius=Math.round((f-32)*5/9);
        return celcius;

    }

    let result;

    if(degreeval=='cel'){
        result= celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}℉`;

    }
    else{
        result= FahTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}℃`;

    }

}