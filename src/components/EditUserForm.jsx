import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {

   // const {register, errors, handleSubmit, setValue} = useForm({
    const {register, handleSubmit, watch, formState: { errors }, setValue } = useForm()//{
  //      defaultValues: props.currentUser
   // }

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username)

    const onSubmit = (data, e) => {
        //console.log(data);
        data.id = props.currentUser.id 
        props.updateUser(props.currentUser.id, data)
        e.target.reset();
        
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {...register("campoRequerido",{required:true})}/>
            <div>
            {errors.campoRequerido && <span>Campo requerido</span>}
            </div>
            <label>Username</label>
            <input type="text" name="username" value="" {...register("campoRequerido2",{required:true})} />
            {errors.campoRequerido2 && <span>Campo requerido</span>}
            <button>Edit user</button>

        </form>
     );
}
 
export default EditUserForm;