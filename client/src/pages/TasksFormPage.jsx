import { useForm } from 'react-hook-form'
import { createTask } from '../api/tasks.api';
import { useNavigate } from 'react-router-dom'

export function TasksFormPage() {

  const {
    register, 
    handleSubmit,
    formState: { errors},
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    await createTask(data);
    navigate("/tasks")
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='title' {...register("title", {required:true})}/>
        {errors.title && <spa>This field is required</spa>}
        <textarea rows="3" placeholder="Description" {...register("description", {required:true})}/>
        {errors.description && <spa>This field is required</spa>}
        <button>Save</button>
      </form>
    </div>
  )
}
