import { useNavigate  } from 'react-router-dom'

import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {

    const history = useNavigate()

    function createPost(project){

        // incializando o cost  services 

        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
           method: 'POST', 
           headers:{
                'Content-type': 'application/json',
           },
           body: JSON.stringify(project), 
        }).then((resp => resp.json())
        .then((data)=> {
            history.push('/projects', {message: 'Projeto criado com sucesso!'})
            /* Linha inserida para teste : */

        })
        ).catch(err => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject