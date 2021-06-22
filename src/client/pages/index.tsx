import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
import { useEffect, useState } from 'react';
import { EmployeeCreateDto } from '../../server/employee/dto/create-employee.input';

interface projectData {
  projectName: string;
  projectCode: number;
}

export default function Home(
  { countries },
  projectName: projectData,
  projectCode: projectData,
) {
  const [projects, setProjects] = useState<EmployeeCreateDto[]>();
  const [projectFormData, setprojectFormData] = useState<projectData>();

  const mySubmitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value + ' ' + e.target[1].value);
    projectName = e.target[0].value;
    projectCode = e.target[1].value;

    const { data } = await client.mutate({
      mutation: gql`
        mutation{
            createProject(project:{
              name:"${projectName}"
              code:${projectCode}
            })
           {
            name
            id
            code
          }
          }
        `,
    });
    alert(
      'You are submitting ' +
        'Project Name: ' +
        projectName +
        ' and Code: ' +
        projectCode,
    );
  };
  const myChangeHandler = (e) => {
    //   console.log(e.target.value);
    //  this.setprojectFormData({ projectName: event.target.value });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     
      
      <main className={styles.main}>
          
        <h1 className={styles.title}>
          Welcome to <a href="#">Project Manager</a>
        </h1>

        <p className={styles.description}>Manage All your projects here </p>
        <h2>Following are the Registered Projects</h2>
        <div className={styles.grid}>
          {countries.map((country) => (
            <div
              key={country.id}
              className={styles.card}
              onClick={() => setProjectsValue(country.id)}
            >
              <h3>{country.name}</h3>
              <p>{country.code}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.create}>
          <h3>Add New Project</h3>

          <form onSubmit={mySubmitHandler}>
            <p>Project Name:</p>
            <input type="text" onChange={myChangeHandler} />
            <p>Project Code:</p>
            <input type="text" onChange={myChangeHandler} />
            <input type="submit" />
          </form>
        </div>
        {projects && (
          <div className={styles.grid}>
            <h3>Employees registered to this project are</h3>
            {projects &&
              projects.map((country) => (
                <div key={country.projectId} className={styles.card}>
                  <h3>{country.firstName}</h3>
                  <p>{country.city}</p>
                </div>
              ))}
          </div>
        )}
      </main>
      <footer className={styles.footer}>
        
          Powered by {'TECHNOVE'}
          
      
      </footer>
      
    </div>
  );

  async function setProjectsValue(e: any) {
    const { data } = await client.query({
      query: gql`
      query{
          getAllProjEmployees(projectId:"${e}"){
            firstName
            city
          }
        }
      `,
    });

    setProjects(data.getAllProjEmployees);
    return {
      props: {
        countries: data.getAllProjEmployees,
      },
    };
  }
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        getAllProjects {
          id
          name
          code
        }
      }
    `,
  });

  return {
    props: {
      countries: data.getAllProjects,
    },
  };
}
