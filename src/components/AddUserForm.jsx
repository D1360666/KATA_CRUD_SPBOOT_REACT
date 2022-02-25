import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    //const {register, handleSubmit, formState:{errors}} = useForm();
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data, e) => {
        console.log(data);

        props.addUser(data)
        
        //limpiar campos
        e.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name"
            {...register("campoRequerido",{required:true})}/>
            
            {errors.campoRequerido && <span>Campo requerido</span>}

            <label>Username</label>
            <input type="text" name="username"
           {...register("campoRequerido",{required:true})}/>
           {errors.campoRequerido && <span>Campo requerido</span>}

            <button>Add new user</button>

        </form>
     );
}
 
export default AddUserForm;