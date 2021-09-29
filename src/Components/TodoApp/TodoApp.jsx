import React from 'react';
import './TodoApp.css';

function TodoApp(){
    return(
        <div>
            <div>
                <h2><u>To-do Lists</u></h2>
            </div>
            <div>
                <h3>Technologies used:</h3>
                <strong><u>Front-end:</u></strong>
                <ul className="tech-list">
                    <li>React</li>
                    <li>Redux</li>
                    <li>Material UI</li>
                </ul>
            </div>
            <div>
                <strong><u>Back-end(multiple back-end applications with different technologies):</u></strong>
                <ul className="tech-list">
                    <li>Node/Express</li>
                    <li>Python/Flask</li>
                    <li>Java/Spring</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
            <div>
                <img className="project-photos" src="https://i.imgur.com/qALX32u.png" height="50%" width="50%"></img>
            </div>
            <div className="project-description">
                <div>
                    <h3><u>Description:</u></h3>
                </div>
                <div>
                    <div>
                        <p className="descriptions-of-projects">
                            The to-do list is a full CRUD application that allows users to view added tasks,
                            add new tasks, update the task to complete and remove tasks. The styling changes
                            when a task is marked complete and also adds a timestamp from when it was completed.
                            I have built a few differet To-do applications to help me explore new technologies.    
                        </p>
                    </div>
                    <div>
                        <h4><u>Front-end</u></h4>
                        <p>The front-end of this application was built using React, Redux, and MaterialUI.
                        The github repository can be found <a href="https://github.com/jothoudt/frontend-to-do">here.</a>
                        </p>
                    </div>
                    <div className="back-end-div">
                        <h4><u>Back-end</u></h4>
                        <p>There are few different back-end applications, built with different
                            technologies, that will work with this app.</p>
                        <ul className="todo-projects-list">
                            Please click the names to view the repositories.
                            <li><a href="https://github.com/jothoudt/backend-todo-node-express"> Node/Express/PostgreSQL</a></li>
                            <li><a href="https://github.com/jothoudt/python-to-do-backend"> Python/Flask/PostgreSQL </a></li>
                            <li><a href="https://github.com/jothoudt/spring-backend-todo"> Java/Spring/PostgreSQL </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoApp;