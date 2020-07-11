console.log('person is running')

const isAdult = (age) => {
    if(age > 18)
    {
        return true;
    }
    else
    {
        return false;
    }
}

const canDrink = (age) => {

    if(age > 20)
    {
        return true;
    }
    else
    {
        return false;
    }
}

const isSenior = (age) => {
    if(age>60)
    {
        return 'Senior citizen'
    }
    else
    {
        return 'Not a senior'
    }
}

export {isAdult,canDrink,isSenior as default};