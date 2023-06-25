const formContainer=document.getElementById('add-form-container');
const listContainer=document.getElementById('large-th');
const selector=document.getElementById('select-d');
const ascBtn=document.getElementById('ascending-btn');
const descBtn=document.getElementById('descending-btn');


const AddBook=(e)=>{
    if(formContainer.style.display=='none')
    {
        formContainer.style.display='flex';
        listContainer.style.display='none';
    }
    else
    {
        formContainer.style.display='none';
        listContainer.style.display='block'; 
    }
}

    const SelectPress=(e)=>{
        const value=selector.value;
        if(value=="Ascending Order")
        {
            ascBtn.click();
        }
        else if(value=="Descending Order")
        {
            descBtn.click();
        }
    }
