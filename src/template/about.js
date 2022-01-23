import { render,updateView } from 'strvejs'
import strveRouter from '../router/index.js'

function About(){
    return render/*html*/`
        <div>
            <button onClick="${goHome}">goHome</button>
            <h1>About11</h1>
        </div>
    `
}

function goHome(){
    strveRouter.routerLink({
        path: '/'
    });
}

export default About