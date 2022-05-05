import React,{useEffect} from 'react';
import {getPosts,getUsers} from "./service";


const MyGen = () => {
    useEffect(() => {
        run(gen)

    },[])

    function *gen() {
        let posts = yield getPosts()
        console.log('posts:',posts[0])
        let users = yield getUsers()
        console.log('users:',users[0])
    }
    function run(generator) {
        const myGen = generator()

        function handle(yielded) {
            if(!yielded.done) {
                yielded.value.then(data => {
                    return handle(myGen.next(data))
                })
            }
        }
        return handle(myGen.next())
    }

    return (
        <div>
            myGen
        </div>
    )
}

export default MyGen